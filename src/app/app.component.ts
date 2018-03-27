///<reference path="services/shopping-cart.data.ts"/>
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShoppingCart} from './shopping-cart/data/shopping-item';
import {ShoppingCartData} from './services/shopping-cart.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart';


  shoppingCart: ShoppingCart ;
  constructor( private shoppingCartData: ShoppingCartData) {

    this.shoppingCartData.shoppingCartData$.subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
    });

  }
}
