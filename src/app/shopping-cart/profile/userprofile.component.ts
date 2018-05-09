import {Component} from "@angular/core";
import {ShoppingCartDataSource} from "../../services/shopping-cart.data";
import {ShoppingCart} from "../data/shopping-item";
import {Router} from "@angular/router";
import {ShoppingServices} from "../../services/shopping.services";

@Component({
  selector: 'app-user-profile-component',
  templateUrl: `./userprofile.component.html`
})
export class UserprofileComponent {
  shoppingCart: ShoppingCart;
  user: ShoppingCart = new ShoppingCart();

  constructor(private router: Router, private shoppingCartData: ShoppingCartDataSource
    , private shoppingServices: ShoppingServices) {

    this.shoppingCart = this.shoppingCartData.getShoppingCart();

    this.getUserDetails();
  }

  private getUserDetails() {
    this.shoppingServices
      .getUserProfile('/users/' + this.shoppingCart.email)
      .subscribe((response: any) => {
        this.user = response;


      });
  }

  private updateUserDetails() {

    var data = {

      address: this.user.address,
      address2: this.user.address2,
      city: this.user.city,
      state: this.user.state,
      zip: this.user.zip


    };
    console.log(JSON.stringify(data));
    this.shoppingServices
      .putUserProfile('/users/' + this.shoppingCart.email, JSON.stringify(data))
      .subscribe((response: any) => {
        this.shoppingCart.address = response.address;
        this.shoppingCart.address2 = response.address2;
        this.shoppingCart.city = response.city;
        this.shoppingCart.state = response.state;
        this.shoppingCart.zip = response.zip;


      });
  }

}
