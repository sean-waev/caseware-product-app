import { Component } from '@angular/core';
import { ProductCardComponentComponent } from "../product-card-component/product-card-component.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponentComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
