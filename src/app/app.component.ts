import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Flipkart';

  constructor(private router: Router, private auth: AuthServiceService) {}

  ngOnInit() {
   
  }

  // checkLoginStatus() {
  //   const token = localStorage.getItem('token');
  //   console.log("Verifying token: " + token);
  //   if (token) {
      
      
  //     // this.auth.isUserloggedin = true;
  //   } else {
  //     this.router.navigate(['app-login']);
  //   }
  // }
}
