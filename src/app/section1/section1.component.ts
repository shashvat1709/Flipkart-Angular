import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor(private api:ApiService,private route:Router,http:HttpClient) { }

  ngOnInit(): void {
  }
  fetchdetails(data: any){
    
    this.api.setData(data)
    console.log(data, "this is fetch details data")

this.route.navigate(['/app-category'])    
    
  }

}



