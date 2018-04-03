///<reference path="services/shopping-cart.data.ts"/>
import {Component} from '@angular/core';
import {ShoppingCart} from './shopping-cart/data/shopping-item';
import {ShoppingCartData} from './services/shopping-cart.data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart';


  shoppingCart: ShoppingCart;

  constructor(private router: Router, private shoppingCartData: ShoppingCartData) {
    // this.shoppingCart=this.shoppingCartData.getCheckout();
    this.shoppingCartData.shoppingCartData$.subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
    });
    //this.router.navigate(['product/All']);

  }
}
