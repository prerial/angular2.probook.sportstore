/**
 * Created by Mikhail on 4/17/2017.
 */
import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from "../model/cart.model";

@Component({
  selector: 'store',
  moduleId: module.id,
  templateUrl: 'store.component.html'
})

export class StoreComponent {

  public selectedCategory: string = null;
  public productsPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(private repository: ProductRepository, private cart: Cart, private router: Router) {}

  get products(): Product[] {
//    return this.repository.getProducts(this.selectedCategory);
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
        .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
/*
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
        .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }
*/
}
