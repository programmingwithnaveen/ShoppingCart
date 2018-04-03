import {Component} from "@angular/core";
import {ShoppingCartData} from "../../services/shopping-cart.data";
import {ShoppingCart} from "../data/shopping-item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit-component',
  templateUrl: `./submit.component.html`
})
export class SubmitComponent {
  shoppingCart: ShoppingCart;

  constructor(private router: Router, private shoppingCartData: ShoppingCartData) {
    this.shoppingCart = this.shoppingCartData.getCheckout();
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.shoppingCart);
    console.log(JSON.stringify(this.shoppingCart));
    // this.shoppingCartData.setCheckout(null);
    // this.shoppingCart=null;
    this.router.navigate(['product/status']);
  }

}
