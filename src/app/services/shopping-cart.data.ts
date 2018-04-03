import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ShoppingCart} from '../shopping-cart/data/shopping-item';

@Injectable()
export class ShoppingCartData {
  private shoppingCart = new Subject<ShoppingCart>();
  shoppingCartData$ = this.shoppingCart.asObservable();
  private checkout: ShoppingCart;

  setShoppingCart(shoppingCart: ShoppingCart) {
    this.shoppingCart.next(shoppingCart);
  }

  setCheckout(shoppingCart: ShoppingCart) {
    this.checkout = shoppingCart;
  }

  getCheckout(): ShoppingCart {
    return this.checkout;
  }

}
