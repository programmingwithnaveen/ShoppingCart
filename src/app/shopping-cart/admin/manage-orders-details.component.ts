import {Component, Input} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-orders-details',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Order details for {{item.username}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <table class="table table-striped  table-bordered ">
        <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Unit Price * Quantity</th>
          <th scope="col">Total Price</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let list of item?.shoppingItem">
          <td>{{ list.productName}}</td>
          <td> {{list.unitPrice | currency}} * {{ list.quantity}}</td>
          <td> {{list.totalPrice | currency}}</td>
        </tr>
        <tr class="table-primary">
          <td colspan="2">Total Price</td>
          <td> {{item.totalPrice | currency}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ManageOrdersDetailsComponent {
  @Input() item;

  constructor(public activeModal: NgbActiveModal) {
  }
}


