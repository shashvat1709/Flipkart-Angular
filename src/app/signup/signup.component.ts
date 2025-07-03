import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as bcrypt from 'bcryptjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUsers: any[]=[];
  signupObj: any={
    email:'',
    name:'',
    password:''
  }
  


  constructor( private route:Router) { }

  ngOnInit(): void {
    window.scroll(0,0)
  
  }
  signup(){

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(this.signupObj.password,salt);

    const signupData = {
      email: this.signupObj.email,
      name: this.signupObj.name,
      password: hashedPassword
    };

    this.signupUsers.push(signupData)


  
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
  
    this.signupObj={ //to clear previous record and fetch current
      email:'',
      name:'',
      password:''
    };
    



  }


login(){

  this.route.navigate(['/app-login'])

}
}
