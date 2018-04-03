import {Component, OnInit} from "@angular/core";
import {ShoppingServices} from "../services/shopping.services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html'
})
export class manageOrders implements OnInit {

  orders;

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
    this.shoppingServices.getProductList('/userlist').subscribe((response) => {
      this.orders = response;
      console.log(this.orders);
    });
  }


}
