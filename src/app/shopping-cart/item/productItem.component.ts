import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingItem} from '../data/shopping-item';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="card" style="width: 13rem;">
      <img src="{{src}}"/>
      <div class="card-body">
        <h5 class="card-title">{{productName}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{unitPrice | currency}}/{{uom}}</h6>
      </div>
      <div class="card-img-bottom">
        <div *ngIf="quantity == 0 ;else add_to_cart">
          <button (click)="updateQuantity(true)" class="btn btn-secondary" style="width: 13rem;">Add to Cart</button>
        </div>
        <ng-template #add_to_cart>
          <button (click)="updateQuantity(true)" class="btn btn-secondary">
            +
          </button>
          <span class="text-center">{{quantity}} in cart</span>
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

  @Input() unitPrice: number;
  totalPrice: number = this.unitPrice;
  @Input() productName: string;
  @Input() src: string;
  @Input() quantity;
  @Input() uom: string;
  @Output() updateShoppingCart = new EventEmitter();
  item;

  constructor() {
  }

  private updateQuantity(invoked: boolean) {
    this.quantity = invoked ? this.quantity + 1 : this.quantity - 1;
    this.totalPrice = this.quantity > 0 ? this.quantity * this.unitPrice : this.unitPrice;

    this.item = new ShoppingItem();
    this.item.productName = this.productName;
    this.item.unitPrice = this.unitPrice;
    this.item.quantity = this.quantity;
    this.item.totalPrice = this.totalPrice;
    this.item.imagePath = this.src;

    this.updateShoppingCart.emit(this.item);

  }
}
