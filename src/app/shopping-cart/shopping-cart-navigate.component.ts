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
    <div class="col-10">
      <app-shopping-cart [shoppingCart]="shoppingCart"></app-shopping-cart>
    </div>
  </div>`
})
export class ShoppingCartNavigateComponent implements OnInit {
shoppingCart: ShoppingCart;

constructor(private shoppingCartData: ShoppingCartData) {
console.log('---------------inmain const---');
console.log( this.shoppingCart);
}

ngOnInit() {
  console.log('nggggggggggggggggggggggggggggg');

  if (!this.shoppingCart) {
    this.shoppingCart = new ShoppingCart();
    console.log('---------------reinitiazlingin---');
    this.shoppingCartData.setShoppingCart(this.shoppingCart);
  }
}
}
