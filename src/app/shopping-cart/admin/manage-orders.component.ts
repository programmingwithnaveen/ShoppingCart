import {Component, OnInit} from "@angular/core";
import {ShoppingServices} from "../../services/shopping.services";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ManageOrdersDetailsComponent} from "./manage-orders-details.component";

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

  open(item: any) {
    const modalRef = this.modalService.open(ManageOrdersDetailsComponent, {size: 'lg'});
    modalRef.componentInstance.item = item;
  }

  private getOrderedList() {
    this.shoppingServices.getProductList('/userinfo').subscribe((response) => {
      this.orders = response;
      console.log(this.orders);
    });
  }


}
