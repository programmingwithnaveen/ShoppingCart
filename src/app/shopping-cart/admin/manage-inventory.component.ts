import {Component, OnInit} from "@angular/core";
import {manageOrders} from "./manage-orders.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ShoppingServices} from "../../services/shopping.services";

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

  open(item) {
    const m = this.modalService.open(manageOrders);
    m.componentInstance.item = item;
  }

  private getOrderedList() {
    this.shoppingServices.getProductList('/products').subscribe((response) => {
      this.inventoryList = response;
      console.log(this.inventoryList);
    });
  }

}
