import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from './data/shopping-item';
import {ShoppingCartData} from '../services/shopping-cart.data';

@Component({
  selector: 'app-shopping-navigate-component',
  template: `<div class="row">
    <div class="col-1">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" routerLink="/product/All">All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/product/Fruits">Fruits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/product/Vegetables">Vegetables</a>
        </li>
      </ul>
      

    </div>
    <div class="col-9">
      <app-shopping-cart [shoppingCart]="shoppingCart"></app-shopping-cart>
    </div>
    <div class="col-1 m-3">
      <div *ngIf="shoppingCart.shoppingItem.length > 0">
        <a routerLink="/product/checkout" ><button class="btn btn-secondary">Checkout</button></a>
      </div>
    </div>
  </div>`
})
export class ShoppingCartNavigateComponent implements OnInit {
shoppingCart: ShoppingCart;

constructor(private shoppingCartData: ShoppingCartData) {
console.log('---------------inmain const---');
  this.shoppingCart=this.shoppingCartData.getCheckout();
  if (!this.shoppingCart) {
    this.shoppingCart = new ShoppingCart();
    console.log('---------------reinitiazlingin---');
    this.shoppingCartData.setShoppingCart(this.shoppingCart);
    this.shoppingCartData.setCheckout(this.shoppingCart);
  }
console.log( this.shoppingCart);
}

ngOnInit() {
  console.log('nggggggggggggggggggggggggggggg');


}
}
