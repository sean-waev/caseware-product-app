import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the 'id' from the route
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  //
  @Output() buttonClick = new EventEmitter<string>();
  message: string = '';

  onClick(): void {
    const message = 'Item added to cart!';
    this.buttonClick.emit(message);
    this.message = message;

    setTimeout(() => {
      // message times out after 4 seconds
      this.message = '';
    }, 5000);
  }
}
