import { Component, OnInit,HostListener } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { query } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartitems: number = 0;
  userEmail:any;
  searchResult: any[] = [];
  searchText: any;
  showSuggestions: boolean = false; // Controls visibility of suggestion box
  query:any
  

  
  constructor(private api: ApiService, private route:Router,private authservice:AuthServiceService, private auth:AuthServiceService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  
    // Subscribe to route parameters
    this.activatedroute.paramMap.subscribe(params => {
      const query = params.get('query');
      if (query) {
        this.handleSearch(query);
      }
    });
    

    this.authservice.userEmail$.subscribe(email=>{
      this.userEmail = email
    })

    

    this.api.products().subscribe(res => {
      this.cartitems = res.length;
    });
  }
  handleSearch(query: string) {
   
    console.log('Performing search for:', query);
  }
 

  searchproduct(query: KeyboardEvent) {
    const element = query.target as HTMLInputElement;
    const value = element.value.trim();

    if (value) {
      this.api.searchproduct(value).subscribe((result) => {
        this.searchResult = result["products"];
        this.showSuggestions = true; // Showing suggestions when there are results
      });
      
    } else {
      this.searchResult = []; 
      this.showSuggestions = false;
    }
  }

  hideSuggestions() {
    
    setTimeout(() => this.showSuggestions = false, 200);
  }

  submitSearch(query: any){
    console.log('Search query:', query);

    this.route.navigate([`search/${query}`])

  }



  logout(): void {
    this.authservice.isUserloggedin = false;
    this.authservice.logout();  
    this.userEmail = null;  
    this.route.navigate(['app-login']); 
  }

 
}


  



