import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ShoppingCart} from '../shopping-cart/data/shopping-item';

@Injectable()
export class ShoppingCartDataSource {
  private shoppingCartDataSource = new Subject<ShoppingCart>();
  shoppingCartData$ = this.shoppingCartDataSource.asObservable();
  private shoppingCart: ShoppingCart;

  setShoppingCartDataSource(shoppingCart: ShoppingCart) {
    this.shoppingCartDataSource.next(shoppingCart);
  }

  setShoppingCart(shoppingCart: ShoppingCart) {
    this.shoppingCart = shoppingCart;
  }

  getShoppingCart(): ShoppingCart {
    return this.shoppingCart;
  }

}
