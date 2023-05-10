import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  product: Product = new Product();
  isEdit = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(product => {
      this.products.push(product);
      this.product = new Product();
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

  editProduct(product: Product): void {
    this.isEdit = true;
    this.product = { ...product };
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      const index = this.products.findIndex(p => p.id === this.product.id);
      this.products[index] = { ...this.product };
      this.product = new Product();
      this.isEdit = false;
    });
  }

  cancel(): void {
    this.isEdit = false;
    this.product = new Product();
  }
}
