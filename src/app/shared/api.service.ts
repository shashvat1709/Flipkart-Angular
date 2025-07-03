import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../products/productmodal';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public cartitemlist :any=[];
  public productlist = new BehaviorSubject<any>([])
  productCategory:any;
  

  

  constructor(private http:HttpClient) { }
  // getting product from the API and creating method in service to be called anywhere in the web-app
  getproduct(){  

    return this.http.get<product[]>("https://dummyjson.com/products?limit=194")

  }

  
  getproductbyid(id:string){
    console.log(id)
    return this.http.get("https://dummyjson.com/products/"+id)

  }
  addtocart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);//keeps last record as well as new 

    console.log(this.cartitemlist)
  
  }


  products(){
    return this.productlist.asObservable();
  }

  setData(data){
    this.productCategory = data;
    console.log(this.productCategory,"categoryname")
  }


  removecartitem(data: product){
    this.cartitemlist.map((a:product, index:product)=>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1)
      }

    })
    this.productlist.next(this.cartitemlist)
  }

  //for amount calculation

  calculateprice(){
    let amount = 0;
    this.cartitemlist.map((a:any)=>{
      amount += a.price;
    })
    return amount;
  }
  discount() {
    let totalDiscountAmount = 0;
    this.cartitemlist.map((item: any) => {
      const itemDiscount = (item.price * item.discountPercentage) / 100;
      totalDiscountAmount += itemDiscount;
    });
    return totalDiscountAmount;
  }
  
  totalamount() {
    const price = this.calculateprice();
    // const totalDiscount = this.discount(); 
    // const deliveryFee = 200; // Includes delivery fee
  
    const totalAmount = price  ;
    return totalAmount;
  }

  removeallitems(){
    this.cartitemlist = [];
    this.productlist.next(this.cartitemlist)

  }

  searchproduct(query:string){
    return this.http.get<product[]>(`https://dummyjson.com/products/search?q=${query}`);
  }


  updateCartItem(updatedItem:product){

    let currentCart = this.cartitemlist.getValue();
    const index = currentCart.findIndex(m=>m.id === updatedItem.id);
    if(index!== -1){

      currentCart[index].quantity = updatedItem.quantity;
      this.cartitemlist.next(currentCart)

    }

  }







   


}
