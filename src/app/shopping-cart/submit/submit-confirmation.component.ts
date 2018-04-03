import {Component} from "@angular/core";
import {ShoppingCartData} from "../../services/shopping-cart.data";
import {ShoppingCart} from "../data/shopping-item";

@Component({
  selector: 'app-submit-conf-component',
  templateUrl: `./submit-conf.component.html`
})
export class SubmitConfirmationComponent {
  shoppingCart: ShoppingCart;
  orderDate: Date;
  shipDate: Date;

  constructor(private shoppingCartData: ShoppingCartData) {
    this.shoppingCart = new ShoppingCart();
    this.shoppingCartData.setCheckout(this.shoppingCart);
    this.orderDate = new Date();
    this.shipDate = new Date();
    this.shipDate.setDate(this.shipDate.getDate() + 2);
  }
}
