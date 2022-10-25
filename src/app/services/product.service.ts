import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS } from '../moke-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(PRODUCTS.find(p => p.id == id));
  }

  // getProduct(id: number): any {
  //   return PRODUCTS.find(p => p.id == id);
  // }

  constructor() { }
}
