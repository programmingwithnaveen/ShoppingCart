import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingItem} from '../data/shopping-item';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="card" style="width: 11rem;">
      <img src="{{item.productURL}}"/>
      <div class="card-body">
        <h6 class="card-title">{{item.productName}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{item.unitPrice | currency}}/{{item.uom}}</h6>
      </div>
      <div class="card-img-bottom">
        <div *ngIf="quantity == 0 ;else add_to_cart">
          <button (click)="updateQuantity(true)" class="btn btn-secondary" style="width: 11rem;">Add to Cart</button>
        </div>
        <ng-template #add_to_cart>
          <button (click)="updateQuantity(true)" class="btn btn-secondary">
            +
          </button>
          <span class="p-3">{{quantity}} in cart</span>
          <button (click)="updateQuantity(false)" [disabled]="quantity <= 0 " class="btn btn-secondary"
                  style="float: right;">
            -
          </button>
        </ng-template>
      </div>
    </div>
  `
})
export class ProductItemComponent {


  totalPrice: number;

  @Input() quantity;

  @Output() updateShoppingCart = new EventEmitter();
  shoppingItem;
  @Input() item;

  /*
  [src]="item.productURL"
                                [productName]="item.productName"
                                [unitPrice]="item.unitPrice"
                                [uom]="item.uom"
                                [productCode]="item.productCode"
                                [quantity]="getSelectedQuantity(item.productName)"
                                [productType]="item.productType"
   */
  constructor() {
  }

  private updateQuantity(invoked: boolean) {


    this.totalPrice = this.item.unitPrice;
    this.quantity = invoked ? this.quantity + 1 : this.quantity - 1;
    this.totalPrice = this.quantity > 0 ? this.quantity * this.item.unitPrice : this.item.unitPrice;

    this.shoppingItem = new ShoppingItem();
    this.shoppingItem.productName = this.item.productName;
    this.shoppingItem.quantity = this.quantity;
    this.shoppingItem.unitPrice = this.item.unitPrice;
    this.shoppingItem.totalPrice = this.totalPrice;
    this.shoppingItem.productURL = this.item.productURL;
    this.shoppingItem.productCode = this.item.productCode;
    this.shoppingItem.productType = this.item.productType;
    this.updateShoppingCart.emit(this.shoppingItem);

  }
}
