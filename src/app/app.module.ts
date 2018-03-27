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

const appRoutes: Routes = [
  { path: '',   component: ShoppingCartNavigateComponent },
  { path: 'product/:type',   component: ShoppingCartNavigateComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ShoppingCartNavigateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule

  ],
  providers: [ShoppingServices,
    ShoppingCartData],
  bootstrap: [AppComponent]
})
export class AppModule {
}
