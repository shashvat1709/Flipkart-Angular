import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

import { product } from 'src/app/products/productmodal';
import { ApiService } from 'src/app/shared/api.service';


declare var Razorpay:any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  productdata: any | product;
  originalPrice:number ;
  
  
  INR: number;

  

  showadd: boolean = true;
  showremove: boolean = false
  price: any;


  constructor(private api: ApiService,private authservice:AuthServiceService ,private activatedroute: ActivatedRoute,private router: Router,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.INR = 84;
    let productid = this.activatedroute.snapshot.paramMap.get('productid');

    
    

    

    console.log("product id is", productid);
    // console.log(this.activatedroute)

    this.api.getproductbyid(productid).subscribe((res) => {
      this.productdata = res;
      console.log(res)
      
       

       this.price = this.productdata.price ;

       this.originalPrice = this.price + (this.price*this.productdata.discountPercentage/100)




    })
    window.scrollTo(0, 0)
    
    

  }
  

  addtocart(productdata: product) {
    
   
    this.showadd = false;
    this.showremove = true;
    this.api.addtocart(productdata)


  }
  removeitem(productdata: product) {
    this.showadd = true;
    this.showremove = false;
    this.api.removecartitem(productdata)

  }

  buynow(){
    if(this.authservice.isUserloggedin == true){
    
    const amountInCents = (Math.round(Number(this.price) * 100))*84;
   
  
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
          this.router.navigate(['/app-order-success']);
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
    alert("Login Required");
    this.router.navigate(['app-login']);
   }

}
}


    
  






