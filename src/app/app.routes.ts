import { ProductCardComponent } from './product-card/product-card.component';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/single', component: ProductCardComponent },
];
