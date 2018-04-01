import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductItemComponent} from './shopping-cart/item/productItem.component';
import {ShoppingServices} from './services/shopping.services';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingCartNavigateComponent} from './shopping-cart/shopping-cart-navigate.component';
import {ShoppingCartData} from './services/shopping-cart.data';
import {CheckoutComponent} from "./shopping-cart/checkout/checkout.component";
import {SubmitComponent} from "./shopping-cart/submit/submit.component";
import {FormsModule} from "@angular/forms";
import {SubmitConfirmationComponent} from "./shopping-cart/submit/submit-confirmation.component";

const appRoutes: Routes = [
  { path: '',   component: ShoppingCartNavigateComponent },
  { path: 'product/checkout',   component: CheckoutComponent },
  { path: 'product/submit',   component: SubmitComponent },
  { path: 'product/status',   component: SubmitConfirmationComponent },
  { path: 'product/:type',   component: ShoppingCartNavigateComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ShoppingCartNavigateComponent,
    CheckoutComponent,
    SubmitComponent,
    SubmitConfirmationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ShoppingServices,
    ShoppingCartData],
  bootstrap: [AppComponent]
})
export class AppModule {
}
