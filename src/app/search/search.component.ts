import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../shared/api.service';
import { product } from '../products/productmodal';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: any[] = [];

  constructor(private activatedroute:ActivatedRoute, private product:ApiService) { }

  ngOnInit(): void {
    let query = this.activatedroute.snapshot.paramMap.get('query');


     console.log("query is :"+query)
    


    query&&this.product.searchproduct(query).subscribe((result)=>{
      this.searchResult = result["products"];
      console.log("search: searched result:"+result["products"])

    })
  
  }

}
