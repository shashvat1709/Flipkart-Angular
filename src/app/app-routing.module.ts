import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHeaderComponent } from './seller-header/seller-header.component';
import { Section1Component } from './section1/section1.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CategoryComponent } from './component/category/category.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
 {
  path:'',
  component:HomeComponent
 },{
  path:'app-seller-auth',
  component:SellerAuthComponent 

 },{
  path:'app-seller-header',
  component:SellerHeaderComponent
 },{
  path:'app-section1',
  component:Section1Component


},{
  path:'app-login',
  component:LoginComponent
},{
  path:'app-products',
  component:ProductsComponent
 
},{
  path:'product-detail/:productid',component:ProductDetailComponent
},{
  path:'app-cart',component:CartComponent
},{
  path:'app-order-success',component:OrderSuccessComponent
},{path:'app-category',component:CategoryComponent
},{
  path:'search/:query',component:SearchComponent
},{

  path:'app-signup',component:SignupComponent

}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
