///<reference path="services/shopping-cart.data.ts"/>
import {Component} from '@angular/core';
import {ShoppingCart} from './shopping-cart/data/shopping-item';
import {ShoppingCartDataSource} from './services/shopping-cart.data';
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ShoppingServices} from "./services/shopping.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  shoppingCart: ShoppingCart;
  usermail;
  password;
  loginForm;
  loginError: boolean = false;

  constructor(private router: Router,
              private shoppingCartData: ShoppingCartDataSource,
              private shoppingServices: ShoppingServices,
              private modalService: NgbModal) {
    this.shoppingCartData.shoppingCartData$.subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
    });
    this.router.navigate(['product/All']);

  }

  private openLoginForm(content) {
    this.loginForm = this.modalService.open(content);
  }

  private login() {
    var input = {
      "email": this.usermail,
      "password": this.password

    };
    this.shoppingServices
      .postPasswordMatch('/users/match', input)
      .subscribe((response: any) => {
        this.shoppingCart.username = response.username;
        this.shoppingCart.state = response.state;
        this.shoppingCart.zip = response.zip;
        this.shoppingCart.address = response.address;
        this.shoppingCart.address2 = response.address2;
        this.shoppingCart.city = response.city;
        this.shoppingCart.role = response.role;
        this.shoppingCart.email = response.email;
        this.loginForm.dismiss();
        this.loginError = false;
      }, () => {
        this.loginError = true
      });

  }

  private logout() {
    this.shoppingCart = new ShoppingCart();
    this.shoppingCartData.setShoppingCart(this.shoppingCart);
    this.router.navigate(['product/All']);
  }
}
