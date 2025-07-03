import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from '../products/productmodal';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  constructor( private api:ApiService) {  }

  ngOnInit(): void {
    
    this.Empty()
    console.log("cart is empty, order-success page ")
   
  }

  Empty(){
    this.api.removeallitems();
  }
}


