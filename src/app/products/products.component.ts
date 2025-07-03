import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from './productmodal'; 



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private api:ApiService) { }


  data: any|product[]

  INR: number;

  



  ngOnInit(): void {
    
    window.scrollTo(0, 0)
    this.displayproducts();
}
  displayproducts(){

    this.api.getproduct().subscribe(res=>{
      this.data = res;

      this.INR =84;
      // this.INR = 84
      // this.data.price = this.data.price*this.INR;


      // console.log(this.data)

      
    })
  }
 

}
