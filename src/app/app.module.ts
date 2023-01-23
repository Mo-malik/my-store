import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModuleModule } from './modules/app-routing-module/app-routing-module.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetaileComponent } from './components/product-detaile/product-detaile.component';
import { ShopingcartComponent } from './components/shopingcart/shopingcart.component';
import { OrderComponent } from './components/order/order.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetaileComponent,
    ShopingcartComponent,
    OrderComponent,
    CartItemComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModuleModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
