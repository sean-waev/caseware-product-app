import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-single-pill',
  imports: [],
  templateUrl: './product-list-single-pill.component.html',
  styleUrl: './product-list-single-pill.component.css'
})
export class ProductListSinglePillComponent {
  //(2. Component & Data Binding) Accept a product object via @Input()
  @Input() productInput: string | undefined;
  @Input() priceInput: number | undefined;

}
