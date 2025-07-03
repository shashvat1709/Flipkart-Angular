import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component' ;
import { SellerHeaderComponent } from './seller-header/seller-header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section4Component } from './section4/section4.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Section5Component } from './section5/section5.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component'; //

import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { BuynowComponent } from './buynow/buynow.component';
import { CategoryComponent } from './component/category/category.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHeaderComponent,
    Section1Component,
    Section2Component,
    Section4Component,
    Section5Component,
    LoginComponent,
    ProductsComponent,
    ProductDetailComponent,
    FooterComponent,
    CartComponent,
    OrderSuccessComponent,
    BuynowComponent,
    CategoryComponent,
    SearchComponent,
    SignupComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // Add FormsModule here
    NgbCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
       
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule {

  


 }
