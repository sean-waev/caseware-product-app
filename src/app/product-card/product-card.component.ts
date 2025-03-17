import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
//(2. Component & Data Binding) ProductCardComponent that displays product details (name, price, description)
export class ProductCardComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  //(4. Routing & Navigation) this ngOnInit gets the id from the route and uses it to retrieve the product from the product service
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  //(2. Component & Data Binding) "add to cart" button that emits an event (@Output()) when clicked
  @Output() buttonClick = new EventEmitter<string>();
  message: string = '';

  onClick(): void {
    const message = 'Item added to cart!';
    this.buttonClick.emit(message);
    this.message = message;
   
    //Timeout to make message disappear after after 5 seconds
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }
}
