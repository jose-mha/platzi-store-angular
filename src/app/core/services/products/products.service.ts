import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    //return this.products;
    return this.http.get<Product[]>( `${environment.url_api}/products/` );
  }

  getProduct( id: string ) {
    //return this.products.find(item => id === item.id );
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.url_api}/products/`, product);
  }

  updateProduct(id: String, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
