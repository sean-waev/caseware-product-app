import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-single-pill',
  imports: [],
  templateUrl: './product-list-single-pill.component.html',
  styleUrl: './product-list-single-pill.component.css'
})
export class ProductListSinglePillComponent {
  @Input() productInput: string | undefined;
  @Input() priceInput: number | undefined;

}
