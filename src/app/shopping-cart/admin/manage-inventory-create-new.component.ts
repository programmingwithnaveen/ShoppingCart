import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingServices} from "../../services/shopping.services";

@Component({
  selector: 'app-manage-inventory-create-new',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">New Product details </h4>
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
                <input type="text" class="form-control"
                       id="productName" name="productName" required [disabled]="title === 'Edit'"
                       [(ngModel)]="item.productName" #productName="ngModel">
                <div *ngIf="productName.invalid && (productName.dirty || productName.touched)"
                     class="alert alert-danger">
                  <div *ngIf="productName.errors.required">
                    This field is required.
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="productType" class="col-sm-3 col-form-label">Product Type</label>
              <div class="col-sm-6">
                <select [(ngModel)]="item.productType" required [disabled]="title === 'Edit'"
                        class="form-control" id="productType" name="productType" #productType="ngModel">
                  <option *ngFor="let x of productCategories" [value]="x" [selected]="x == item.productType">{{x}}
                  </option>
                </select>
                <div *ngIf="productType.invalid && (productType.dirty || productType.touched)"
                     class="alert alert-danger">
                  <div *ngIf="productType.errors.required">
                    This field is required.
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="unitPrice" class="col-sm-3 col-form-label">Unit Price</label>
              <div class="col-sm-6">
                <input type="number" class="form-control" [disabled]="title === 'Edit'"
                       id="unitPrice" name="unitPrice" required
                       [(ngModel)]="item.unitPrice" #unitPrice="ngModel">
                <div *ngIf="unitPrice.invalid && (unitPrice.dirty || unitPrice.touched)"
                     class="alert alert-danger">
                  <div *ngIf="unitPrice.errors.required">
                    This field is required.
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="uom" class="col-sm-3 col-form-label">UOM</label>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="uom"
                       name="uom" required [disabled]="title === 'Edit'"
                       [(ngModel)]="item.uom" #uom="ngModel">
                <div *ngIf="uom.invalid && (uom.dirty || uom.touched)"
                     class="alert alert-danger">
                  <div *ngIf="uom.errors.required">
                    This field is required.
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="productURL" class="col-sm-3 col-form-label">Product URL</label>
              <div class="col-sm-6">
                <input type="text" class="form-control"
                       id="productURL" name="productURL" required [disabled]="title === 'Edit'"
                       [(ngModel)]="item.productURL" #productURL="ngModel">
                <div *ngIf="productURL.invalid && (productURL.dirty || productURL.touched)"
                     class="alert alert-danger">
                  <div *ngIf="productURL.errors.required">
                    This field is required.
                  </div>
                </div>
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

      <button type="button" class="btn btn-outline-dark" [disabled]="inventoryForm.invalid" (click)="save()">{{title}}
      </button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ManageInventoryCreateNewComponent {
  @Input() item;
  title: string = 'Save';

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

    if (this.item.productCode && this.title == 'Save') {
      this.shoppingServices
        .putProductDetails('/products/' + this.item.productCode, this.item)
        .subscribe(() => {
          this.title = 'Edit';
        });
    } else if (!this.item.productCode && this.title == 'Save') {
      this.shoppingServices
        .postProductDetails('/products', this.item)
        .subscribe((res: any) => {
          this.title = 'Edit';
          this.item.productCode = res.productCode;

        });
    } else if (this.title == 'Edit') {
      this.title = 'Save';
    } else if (this.title == 'Save') {
      this.title = 'Edit';
    }


  }
}


