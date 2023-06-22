import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Item, Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get('/api/cart').pipe(
      map((response: Item[]) => response),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').pipe(
      map((response: Product[]) => response),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
