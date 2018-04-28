import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductItemComponent} from './shopping-cart/item/productItem.component';
import {ShoppingServices} from './services/shopping.services';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingCartNavigateComponent} from './shopping-cart/shopping-cart-navigate.component';
import {ShoppingCartDataSource} from './services/shopping-cart.data';
import {OrderSummaryComponent} from "./shopping-cart/ordersummary/ordersummary.component";
import {UserinfoComponent} from "./shopping-cart/submit/userinfo.component";
import {FormsModule} from "@angular/forms";
import {SubmitConfirmationComponent} from "./shopping-cart/submit/submit-confirmation.component";
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {manageOrders} from "./shopping-cart/admin/manage-orders.component";
import {manageInventory} from "./shopping-cart/admin/manage-inventory.component";


const appRoutes: Routes = [
  {path: '', component: ShoppingCartNavigateComponent},
  {path: 'product/summary', component: OrderSummaryComponent},
  {path: 'product/userinfo', component: UserinfoComponent},
  {path: 'product/status', component: SubmitConfirmationComponent},
  {path: 'product/:type', component: ShoppingCartNavigateComponent},
  {path: 'admin/manageorder', component: manageOrders},
  {path: 'admin/manageinventory', component: manageInventory}

];


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ShoppingCartNavigateComponent,
    OrderSummaryComponent,
    UserinfoComponent,
    SubmitConfirmationComponent,
    manageOrders,
    manageInventory
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()

  ],
  providers: [ShoppingServices,
    ShoppingCartDataSource, [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}]],
  bootstrap: [AppComponent],
  entryComponents: [manageOrders]
})
export class AppModule {
}
