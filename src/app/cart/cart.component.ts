import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from '../products/productmodal';
import { RoutesRecognized } from '@angular/router';
import{ Router} from '@angular/router'
import { AuthServiceService } from '../auth-service.service'; 



declare var Razorpay:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  showproduct: any=[];
  productQuantity:number= 1;

  public itemamount :any;
  public discount: number|string;
  public total:number | string | any;
 

  INR: number;
  

  constructor(private api:ApiService,private route: Router,private ngZone: NgZone,private authservice:AuthServiceService) { }
// ngZone is user here because we encountered angular routeing module is called by an outside entity(razorpay side) so we have to specify ngZone for outside call 

  ngOnInit(): void {
    this.INR = 84;
    
    this.api.products().subscribe(res=>{
      this.showproduct = res;
      
      this.itemamount = this.api.calculateprice().toFixed(2);
      this.discount = this.api.discount().toFixed(2);
      this.total = this.api.totalamount().toFixed(2)
    })
    window.scrollTo(0, 0)
  }
  deleteitem(item:product){
    this.api.removecartitem(item)
    

  }
  Empty(){
    this.api.removeallitems();
  }

  //payment gateway code by Rozerpay  
  payNow() {
  if(this.authservice.isUserloggedin == true){
      

  // Razorpay only accepts integer amount 
    const amountInCents = (Math.round(Number(this.api.totalamount()) * 100))*84 *this.productQuantity;
   
  
    const RozarpayOptions = {
      description: 'flipkart pay services',
      currency: 'INR',
      amount: amountInCents, 
      key: 'rzp_test_Zky1ITb8buDV9F',
      theme: {
        color: '#2874f0'
      },
      handler: (response: any) => {
        console.log("your payment ID is: " + response.razorpay_payment_id);
        this.ngZone.run(() => {
          this.route.navigate(['/app-order-success']);
        });

      
      },
     
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
}
    
  
    Razorpay.open(RozarpayOptions);


}
  
else{
    alert('login required')

    this.route.navigate(["app-login"]);

}
}

// handleQuantity(val: string, item: any) {
//   if (val === 'plus' && item < 10) {
//     item.quantity += 1;
//   } else if (val === 'min' && item > 1) {
//     item.quantity -= 1;
//   }
// }









}
