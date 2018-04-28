import {Component} from "@angular/core";
import {ShoppingCartDataSource} from "../../services/shopping-cart.data";
import {ShoppingCart} from "../data/shopping-item";

@Component({
  selector: 'app-submit-conf-component',
  templateUrl: `./submit-conf.component.html`
})
export class SubmitConfirmationComponent {
  shoppingCart: ShoppingCart;
  orderDate: Date;
  deliveryDate: Date;

  constructor(private shoppingCartData: ShoppingCartDataSource) {
    this.shoppingCart = this.shoppingCartData.getShoppingCart();
    this.orderDate = new Date(this.shoppingCart.orderDate);
    this.deliveryDate = new Date(this.shoppingCart.deliveryDate);

    this.shoppingCart = new ShoppingCart();
    this.shoppingCartData.setShoppingCart(this.shoppingCart);
    this.shoppingCartData.setShoppingCartDataSource(this.shoppingCart);


  }
}
