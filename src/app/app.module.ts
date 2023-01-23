import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RatingModule} from 'primeng/rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { NewproductComponent } from './pages/newproduct/newproduct.component';
import { UpdateproductComponent } from './pages/updateproduct/updateproduct.component';
import { ProductComponent } from './pages/product/product.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FootersComponent } from './core/footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewproductComponent,
    UpdateproductComponent,
    ProductComponent,
    NavigatorComponent,
    HomeComponent,
    FootersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
