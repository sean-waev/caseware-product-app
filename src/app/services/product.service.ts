import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Product {
  id: number;
  Name: string;
  Price: number;
  Description: string;
}

@Injectable({
  providedIn: 'root',
})
//(3. Service & Data Handling) ProductService that provides product data (from a mock JSON file)
export class ProductService {
  private productsUrl = 'assets/products.json';
  constructor(private http: HttpClient) {}

  //(3. Service & Data Handling) Observable (RxJS) for asynchronous data fetching
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  //(4. Routing & Navigation) call to get individual product for product details page
  getProductById(id: number): Observable<Product | undefined> {
    return this.http
      .get<Product[]>(this.productsUrl)
      .pipe(
        map((products: Product[]) =>
          products.find((product) => product.id === id)
        )
      );
  }
}
