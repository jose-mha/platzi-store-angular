import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  //dataSource = ELEMENT_DATA;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe( products => {
      this.products = products
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe( rta => {
      //console.log(rta);
      this.fetchProducts();
    });
  }

}
