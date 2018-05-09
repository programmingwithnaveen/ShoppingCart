import {Component} from "@angular/core";
import {ShoppingCart, ShoppingItem} from "../data/shopping-item";
import {ShoppingCartDataSource} from "../../services/shopping-cart.data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrderSummaryComponent {
  shoppingCart: ShoppingCart;

  constructor(private shoppingCartData: ShoppingCartDataSource, private router: Router) {
    this.shoppingCart = this.shoppingCartData.getShoppingCart();
  }

  private updateQuantity(invoked: boolean, item: ShoppingItem) {
    item.quantity = invoked ? item.quantity + 1 : item.quantity - 1;
    item.totalPrice = item.quantity > 0 ? item.quantity * item.unitPrice : item.unitPrice;

    if (item.quantity === 0) {
      let index = this.shoppingCart.shoppingItem.findIndex((i) => i.productName === item.productName);
      this.shoppingCart.shoppingItem.splice(index, 1);
    }
  }

  private totalPrice(): number {
    let totalPrice: number = 0;

    this.shoppingCart.shoppingItem.forEach((item) => totalPrice += item.totalPrice);
    this.shoppingCart.totalPrice = totalPrice;
    return totalPrice;
  }

  private deleteItem(item: ShoppingItem) {
    if (item.quantity !== 0) {
      let index = this.shoppingCart.shoppingItem.findIndex((i) => i.productName === item.productName);
      this.shoppingCart.shoppingItem.splice(index, 1);
    }
  }

  private clearShoppingCart() {
    this.shoppingCart.shoppingItem = [];
    this.router.navigate(['product/All']);

  }
}
