import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  data: any;
  productdetails;
  product:void;
  getprod:any;


  constructor(private api:ApiService,private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  

    this.product = this.api.productCategory
   console.log(this.product)

    this.http.get("https://dummyjson.com/products/category/" + this.product).subscribe((data)=>{

      console.log("data", data);
      this.productdetails = data['products']
      console.log(this.productdetails,"final")



    })
    

  
  }
  
  

}
