import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  editedProduct: any = null;

  constructor(private productService: ProductListService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.log('Error getting products:', error);
      }
    );
  }

  editProduct(product: any) {
    this.editedProduct = { ...product }; // Create a copy of the product for editing
    console.log(product);
    console.log(this.editedProduct);
  }

  cancelEdit() {
    this.editedProduct = null; // Clear the editedProduct variable to cancel editing
  }

  saveProduct(product: any) {
    this.productService.updateProduct(product).subscribe(
      updatedProduct => {
        // Find the edited product in the products array and update its data
        const index = this.products.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
          this.products[index] = updatedProduct;
          console.log('Product updated:', updatedProduct);
        }
        this.editedProduct = null; // Clear the editedProduct variable after saving
      },
      error => {
        console.log('Error updating product:', error);
      }
    );
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        // Remove the deleted product from the list
        this.products = this.products.filter(p => p.id !== product.id);
        this.getProducts();
        console.log('Product deleted:', product);
      },
      error => {
        console.log('Error deleting product:', error);
      }
    );
  }
}