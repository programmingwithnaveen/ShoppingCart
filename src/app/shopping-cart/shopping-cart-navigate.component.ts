import {Component, OnInit} from '@angular/core';
import {ShoppingCart} from './data/shopping-item';
import {ShoppingCartDataSource} from '../services/shopping-cart.data';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shopping-navigate-component',
  template: `
    <span class="m-2"></span>
    <div class="row">
      <div class="col-2">

        <ul class="list-group">
          <li class="list-group-item"><a class="nav-link" routerLink="/product/All">All Items</a></li>
          <li class="list-group-item"><a class="nav-link" routerLink="/product/Fruits">Fruits</a></li>
          <li class="list-group-item"><a class="nav-link" routerLink="/product/Vegetables">Vegetables</a></li>
          <li class="list-group-item"><a class="nav-link" routerLink="/product/Dairy">Dairy</a></li>
          <li class="list-group-item"><a class="nav-link" routerLink="/product/Bakery">Bakery & Pastery</a></li>
          <li class="list-group-item"><a class="nav-link" routerLink="/product/Beverage">Beverage</a></li>
        </ul>
      </div>
      <div class="col-8">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">{{productType}}</li>
          </ol>
        </nav>
        <app-shopping-cart [shoppingCart]="shoppingCart"></app-shopping-cart>
      </div>
      <div class="col-1 m-3 ">
        <div *ngIf="shoppingCart.shoppingItem.length > 0">
          <a routerLink="/product/checkout">
            <button class="btn btn-secondary">Checkout</button>
          </a>
        </div>
      </div>
    </div>`
})
export class ShoppingCartNavigateComponent implements OnInit{
  shoppingCart: ShoppingCart;
  productType;

  constructor(private shoppingCartData: ShoppingCartDataSource, private route: ActivatedRoute) {

    this.shoppingCart = this.shoppingCartData.getShoppingCart();
    if (!this.shoppingCart) {
      this.shoppingCart = new ShoppingCart();
      console.log('shopping cart reinitalizing');
      this.shoppingCartData.setShoppingCartDataSource(this.shoppingCart);
      this.shoppingCartData.setShoppingCart(this.shoppingCart);
    }
    console.log(this.shoppingCart);
  }

  ngOnInit() {
    this.productType = '';
    this.route.params.subscribe(params => {
      this.productType = params['type'];

    });
  }
}
