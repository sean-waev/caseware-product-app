import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface Product {
  id: number;
  Name: string;
  Price: number;
  Description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'assets/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
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
