import {Component} from "@angular/core";
import {ShoppingCartData} from "../../services/shopping-cart.data";
import {ShoppingCart} from "../data/shopping-item";

@Component({
  selector:'app-submit-conf-component',
  templateUrl: `./submit-conf.component.html`
})
export class SubmitConfirmationComponent {
  shoppingCart: ShoppingCart;

  constructor(private shoppingCartData: ShoppingCartData) {
    this.shoppingCart = this.shoppingCartData.getCheckout();
  }
}
