import { Component, OnInit } from '@angular/core';
import { ProductListSinglePillComponent } from '../product-list-single-pill/product-list-single-pill.component';
import { Product, ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductListSinglePillComponent, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})

//(3. Service & Data Handling) Fetch and display products in a ProductListComponent
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  //(3. Service & Data Handling) ngOnInit fetches products from product service
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
