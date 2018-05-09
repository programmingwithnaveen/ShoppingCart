import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingServices} from "../../services/shopping.services";

@Component({
  selector: 'app-manage-inventory-details',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Product details for {{item.productName}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form #inventoryForm="ngForm">
        <div class="row">
          <div class="col-9">
            <div class="form-group row">
              <label for="productName" class="col-sm-3 col-form-label">Product Name</label>
              <div class="col-sm-6">
                <input type="text" [disabled]="isEditable" class="form-control"
                       id="productName" name="productName" required
                       [(ngModel)]="item.productName" #productName="ngModel">
              </div>
            </div>
            <div class="form-group row">
              <label for="productType" class="col-sm-3 col-form-label">Product Type</label>
              <div class="col-sm-6">
                <select [(ngModel)]="item.productType" required [disabled]="isEditable" class="form-control"
                        id="productType" name="productType" #productType="ngModel">
                  <option *ngFor="let x of productCategories" [value]="x" [selected]="x == item.productType">{{x}}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="unitPrice" class="col-sm-3 col-form-label">Unit Price</label>
              <div class="col-sm-6">
                <input type="number" [disabled]="isEditable" class="form-control"
                       id="unitPrice" name="unitPrice" required
                       [(ngModel)]="item.unitPrice" #unitPrice="ngModel">
              </div>
            </div>
            <div class="form-group row">
              <label for="uom" class="col-sm-3 col-form-label">UOM</label>
              <div class="col-sm-6">
                <input type="text" [disabled]="isEditable" class="form-control" id="uom"
                       name="uom" required
                       [(ngModel)]="item.uom" #uom="ngModel">
              </div>
            </div>
            <div class="form-group row">
              <label for="productURL" class="col-sm-3 col-form-label">Product URL</label>
              <div class="col-sm-6">
                <input type="text" [disabled]="isEditable" class="form-control"
                       id="productURL" name="productURL" required
                       [(ngModel)]="item.productURL" #productURL="ngModel">
              </div>
            </div>
          </div>
          <div class="col-3">
            <img src="{{item.productURL}}" class="img-thumbnail"/>
          </div>
        </div>
      </form>

    </div>
    <div class="modal-footer">

      <button type="button" class="btn btn-outline-dark" (click)="save()">{{isEditable === false ? 'Save' : 'Edit'}}
      </button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ManageInventoryDetailsComponent {
  @Input() item;
  @Input() isEditable: boolean;
  productCategories: string[];

  constructor(public activeModal: NgbActiveModal, private shoppingServices: ShoppingServices) {

    this.productCategories = [];
    this.productCategories.push('Vegetables');
    this.productCategories.push('Fruits');
    this.productCategories.push('Dairy');
    this.productCategories.push('Beverage');
    this.productCategories.push('Bakery');


  }

  save() {
    if (!this.isEditable) {
      this.shoppingServices.putProductDetails('/products/' + this.item.productCode, this.item).subscribe();
    }
    this.isEditable ? this.isEditable = false : this.isEditable = true;
  }
}


