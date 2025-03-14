import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.component.html',
  styleUrl: './product-card-component.component.css'
})
export class ProductCardComponentComponent {
  @Input() productInput: string | undefined;
  @Input() priceInput: string | undefined;

}
