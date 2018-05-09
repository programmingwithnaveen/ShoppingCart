import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ShoppingServices} from "../../services/shopping.services";
import {ManageInventoryDetailsComponent} from "./manage-inventory-details.component";
import {ProductItem} from "../data/shopping-item";
import {ManageInventoryCreateNewComponent} from "./manage-inventory-create-new.component";

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html'
})
export class manageInventory implements OnInit {
  inventoryList;


  constructor(private modalService: NgbModal, private shoppingServices: ShoppingServices) {

  }

  ngOnInit() {

    this.getOrderedList();

  }

  open(item: any, isEditable: boolean) {
    const m = this.modalService.open(ManageInventoryDetailsComponent, {size: 'lg'});
    if (!item) {
      item = new ProductItem();
    }
    m.componentInstance.item = item;
    m.componentInstance.isEditable = isEditable;
  }

  createNewComponent() {
    const m = this.modalService.open(ManageInventoryCreateNewComponent, {size: 'lg'});
    m.componentInstance.item = new ProductItem();
    m.result.then(() => {
      this.getOrderedList();
    });

  }

  private getOrderedList() {
    this.shoppingServices.getProductList('/products').subscribe((response) => {
      this.inventoryList = response;

      console.log(this.inventoryList);
    });

  }

  private deleteItem(productCode: number) {
    this.shoppingServices
      .deleteProductDetails('/products/' + productCode)
      .subscribe(() => this.getOrderedList());
  }


}
