import { Component, OnInit } from '@angular/core';
import { ProductListSinglePillComponent } from "../product-list-single-pill/product-list-single-pill.component";
import { Product, ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductListSinglePillComponent, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  template: `
  <ul>
    <li *ngFor="let product of products">
      {{ product.Name }} - \${{ product.Price }}
    </li>
  </ul>
`
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      // console.log("data:", data);
    });
  }
}
