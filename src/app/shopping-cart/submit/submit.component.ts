import {Component} from "@angular/core";
import {ShoppingCartDataSource} from "../../services/shopping-cart.data";
import {ShoppingCart} from "../data/shopping-item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit-component',
  templateUrl: `./submit.component.html`
})
export class SubmitComponent {
  shoppingCart: ShoppingCart;

  constructor(private router: Router, private shoppingCartData: ShoppingCartDataSource) {
    this.shoppingCart = this.shoppingCartData.getShoppingCart();
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.shoppingCart);
    console.log(JSON.stringify(this.shoppingCart));

    this.router.navigate(['product/status']);
  }

}
