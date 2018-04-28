import {Component, Input, OnInit} from '@angular/core';
import {ShoppingServices} from '../services/shopping.services';
import {ShoppingCart, ShoppingItem} from './data/shopping-item';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() shoppingCart: ShoppingCart;
  @Input() itemIndex;
  response: any;
  shoppingInventory = [];
  productType = '';

  constructor(private shoppingServices: ShoppingServices,
              private route: ActivatedRoute,
              private router: Router) {
    // this.getProductList();
    console.log('-----------shopping cart const-------');
    console.log(this.shoppingCart);
    console.log('------------------');
  }


  getProductList() {
    this.shoppingServices.getProductList('/products').subscribe((response) => {
      this.response = response;
      if (this.productType !== 'All') {
        this.response = this.response.filter(item => item.productType === this.productType);
      }
      while (this.response.length) {
        this.shoppingInventory.push(this.response.splice(0, 3));
      }

    });
  }

  ngOnInit() {
    this.productType = '';
    this.route.params.subscribe(params => {
      this.productType = params['type'];
      this.shoppingInventory = [];
      this.getProductList();
    });
  }

  updateShoppingCart(item) {
    const index = this.shoppingCart.shoppingItem.findIndex(function (existItem) {
      return existItem.productName === item.productName;
    });
    if (index > -1) {
      this.shoppingCart.shoppingItem[index] = item;
    } else {
      this.shoppingCart.shoppingItem.push(item);
    }
    if (item.quantity === 0) {
      let index = this.shoppingCart.shoppingItem.findIndex((i) => i.productName === item.productName);
      this.shoppingCart.shoppingItem.splice(index, 1);
    }
    console.log(this.shoppingCart);
  }

  getSelectedQuantity(productName: string): number {
    let temp: ShoppingItem;
    let quantity = 0;
    if (this.shoppingCart) {
      temp = this.shoppingCart.shoppingItem.find((item) => item.productName === productName);
    }
    if (temp) {
      quantity = temp.quantity;
    }
    return quantity;
  }

}
