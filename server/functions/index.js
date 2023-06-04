const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;
const upload = multer({ dest: "img/" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/img", express.static(path.join(__dirname, "img")));

const jsonPath = path.join(__dirname, "data.json");
let products = [];

mergeProductsFile();
0

// Create a product
app.post("/api/products", upload.single("image"), (req, res) => {
  const { name, quantity, price } = req.body;
  const image = req.file;

  // Handle image processing (e.g., saving to disk or cloud storage)
  if (image) {
    const ext = path.extname(image.originalname); // Get the file extension
    const fileName = `${Date.now().toString(36)}${ext}`; // Generate the fileName
    const imagePath = path.join(__dirname, "img", fileName);
    const publicPath = `/img/${fileName}`;
    fs.rename(image.path, imagePath, (err) => {
      if (err) {
        console.error("Error moving uploaded image:", err);
        res.status(500).json({ message: "Failed to move the uploaded image" });
      } else {
        console.log("Image moved successfully");

        const newProduct = {
          id: products.length + 1,
          name,
          quantity: parseInt(quantity),
          price: parseFloat(price),
          image: fileName, // Save the fileName in the product object
          path: publicPath,
        };

        fs.readFile(jsonPath, "utf8", (err, jsonString) => {
          if (err) {
            // If the JSON file doesn't exist, create a new array with the data
            const newProducts = [newProduct];
            fs.writeFile(jsonPath, JSON.stringify(newProducts), (error) => {
              if (error) {
                console.error(error);
                res
                  .status(500)
                  .json({ message: "Failed to save the file path" });
              } else {
                res.status(201).json({
                  message: "File uploaded successfully",
                  path: publicPath,
                });
              }
            });
          } else {
            // If the JSON file exists, append the new data to the existing array
            let existingProducts = JSON.parse(jsonString);
            existingProducts.push(newProduct);
            fs.writeFile(
              jsonPath,
              JSON.stringify(existingProducts),
              (error) => {
                if (error) {
                  console.error(error);
                  res
                    .status(500)
                    .json({ message: "Failed to save the file path" });
                } else {
                  res.status(201).json({
                    message: "File uploaded successfully",
                    path: publicPath,
                  });
                  products.push(newProduct);
                }
              }
            );
          }
        });
      }
    });
  } else {
    res.status(400).json({ error: "Image file not provided" });
  }
});

// Read all products
app.get("/api/products", (req, res) => {
  fs.readFile(jsonPath, "utf8", (err, jsonString) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to read files" });
    } else {
      const files = JSON.parse(jsonString);
      res.json(files);
    }
  });
});

// Read a single product by ID
app.get("/api/products/:id", (req, res) => {
  const fileId = parseInt(req.params.id);
  fs.readFile(jsonPath, "utf8", (err, jsonString) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to read the file" });
    } else {
      const files = JSON.parse(jsonString);
      const file = files.find((f) => f.id === fileId);
      if (file) {
        res.json(file);
      } else {
        res.status(404).json({ message: "File not found" });
      }
    }
  });
});

// Update a product
app.put("/api/products/:id", upload.single("image"), (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, quantity, price } = req.body;
  const image = req.file;

  fs.readFile(jsonPath, "utf8", (err, jsonString) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update the file" });
    } else {
      let files = JSON.parse(jsonString);
      const index = files.findIndex((f) => f.id === productId);
      if (index !== -1) {
        files[index].name = name;
        files[index].quantity = parseInt(quantity);
        files[index].price = parseFloat(price);
        files[index].image = image ? image.originalname : files[index].image;

        fs.writeFile(jsonPath, JSON.stringify(files), (error) => {
          if (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to update the file" });
          } else {
            res.json(files[index]);
          }
        });
      } else {
        res.status(404).json({ message: "File not found" });
      }
    }
  });
});

// Delete a product
app.delete("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  fs.readFile(jsonPath, "utf8", (err, jsonString) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete the file" });
    } else {
      let files = JSON.parse(jsonString);
      const index = files.findIndex((f) => f.id === productId);
      if (index !== -1) {
        const deletedFile = files[index];
        files.splice(index, 1);
        // Reset the IDs and sort the products
        files = files.map((f, i) => ({ ...f, id: i + 1 }));
        files.sort((a, b) => a.id - b.id);
        fs.writeFile(jsonPath, JSON.stringify(files), (error) => {
          if (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to delete the file" });
          } else {
            // Delete the image file from the "img" folder
            const imagePath = path.join(__dirname, "img", deletedFile.image);
            fs.unlink(imagePath, (unlinkError) => {
              if (unlinkError) {
                console.error(unlinkError);
              } else {
                console.log("Image file deleted successfully");
              }
            });
            res.json({ message: "File deleted successfully" });
            mergeProductsFile();
          }
        });
      } else {
        res.status(404).json({ message: "File not found" });
      }
    }
  });
  // const productIndex = products.findIndex(p => p.id === productId);

  // if (productIndex !== -1) {
  //   products.splice(productIndex, 1);

  //   // Save products to JSON file
  //   saveProductsToFile(products);

  //   res.sendStatus(204);
  // } else {
  //   res.status(404).json({ error: 'Product not found' });
  // }
});

// Save products to JSON file
function saveProductsToFile(products) {
  fs.writeFile("data.json", JSON.stringify(products), (err) => {
    if (err) {
      console.error("Error saving products to file:", err);
    } else {
      console.log("Products saved to file");
    }
  });
}

function mergeProductsFile(){
  try {
    const jsonString = fs.readFileSync(jsonPath, "utf8");
    products = JSON.parse(jsonString);
    console.log("Products data loaded from data.json");
  } catch (err) {
    console.error(err);
  }
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
