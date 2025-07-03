import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserloggedin:boolean;

  



  private userEmailSubject = new BehaviorSubject<string | null>(null);  // it is holdin the user email as subject to change
  userEmail$ = this.userEmailSubject.asObservable();  

  constructor(private http: HttpClient,private route:Router) {}

  login(email: string) {
   
    this.http.post("http://localhost:3000/app-login", { email })
      .subscribe((res: any) => {
        console.warn("check this :",res);
        if (res.token) {

          this.isUserloggedin= true;// to clear or assign token
          this.userEmailSubject.next(email);


          localStorage.setItem("token", res.token);
        } else {
          alert("Login failed");
        }
      }, (err) => {
        this.isUserloggedin = false;
        console.error("Error during login:", err);
      });

  }

  logout(): void {
    
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token'); 
    this.userEmailSubject.next(null);
    
    console.log("token is cleared for this session")
    this.http.post("http://localhost:3000/app-login", {}).subscribe({
      next: () => {
        console.log('Logged out successfully');
      },
      error: (err) => {
        console.error('Logout error', err);
      }
    });

    this.route.navigate(['/app-login']);
  }
}

  
  // profile(){
  //   let headers
  //   this.http.post("http://localhost:3000/profile",{})
  //   .subscribe((res: any) => {
     
  //   });
  







