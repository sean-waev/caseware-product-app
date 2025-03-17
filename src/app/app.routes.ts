import { ProductCardComponent } from './product-card/product-card.component';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

//(4. Routing & Navigation) Angular routing for /products → Displays ProductListComponent and /products/:id → Displays ProductCardComponent
export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductCardComponent },
];
