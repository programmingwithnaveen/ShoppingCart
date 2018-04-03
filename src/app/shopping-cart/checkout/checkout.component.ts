import {Component} from "@angular/core";
import {ShoppingCart, ShoppingItem} from "../data/shopping-item";
import {ShoppingCartDataSource} from "../../services/shopping-cart.data";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  shoppingCart: ShoppingCart;

  constructor(private shoppingCartData: ShoppingCartDataSource) {
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
  }
}
