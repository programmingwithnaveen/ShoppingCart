import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from './data/shopping-item';
import {ShoppingCartData} from '../services/shopping-cart.data';

@Component({
  selector: 'app-shopping-navigate-component',
  template: `
    <span class="m-2"></span>
    <div class="row">
    <div class="col-2">
      
      <ul class="list-group">
        <li class="list-group-item"><a class="nav-link" routerLink="/product/All">All</a></li>
        <li class="list-group-item"><a class="nav-link" routerLink="/product/Fruits">Fruits</a></li>
        <li class="list-group-item"><a class="nav-link" routerLink="/product/Vegetables">Vegetables</a></li>
        <li class="list-group-item"><a class="nav-link" routerLink="/product/Dairy">Dairy</a></li>
        <li class="list-group-item"><a class="nav-link" routerLink="/product/Bakery">Bakery & Pastery</a></li>
        <li class="list-group-item"><a class="nav-link" routerLink="/product/Beverage">Beverage</a></li>
      </ul>
    </div>
    <div class="col-8">
      <app-shopping-cart [shoppingCart]="shoppingCart"></app-shopping-cart>
    </div>
    <div class="col-1 m-3 ">
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
