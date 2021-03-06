import {Component} from "@angular/core";
import {ShoppingCartDataSource} from "../../services/shopping-cart.data";
import {ShoppingCart} from "../data/shopping-item";
import {Router} from "@angular/router";
import {ShoppingServices} from "../../services/shopping.services";

@Component({
  selector: 'app-submit-component',
  templateUrl: `./userinfo.component.html`
})
export class UserinfoComponent {
  shoppingCart: ShoppingCart;

  constructor(private router: Router, private shoppingCartData: ShoppingCartDataSource
    , private shoppingServices: ShoppingServices) {
    if (!this.shoppingCart) {
      this.shoppingCart = this.shoppingCartData.getShoppingCart();
    }
    console.log(JSON.stringify(this.shoppingCart));
  }

  onSubmit() {
    console.log('submitted');
    let orderDate = new Date();
    let deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);
    this.shoppingCart.orderDate = orderDate.toLocaleString();
    this.shoppingCart.deliveryDate = deliveryDate.toLocaleString();
    console.log(this.shoppingCart);
    console.log('Final submission');
    console.log(JSON.stringify(this.shoppingCart));
    this.shoppingServices.postShoppingCart('/userinfo', JSON.stringify(this.shoppingCart)).subscribe();

    this.router.navigate(['product/status']);
  }

}
