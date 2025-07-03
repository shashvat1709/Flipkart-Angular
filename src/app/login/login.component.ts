import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  signupUsers: any[] = [];
  userEmail: any;

  constructor(
    private route: Router,
    private http: HttpClient,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.initForm();
    window.scroll(0, 0);

    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  userlogin() {
    if (this.formGroup.valid) {
      const email = this.formGroup.get('email')?.value;
      const password = this.formGroup.get('password')?.value;

      // Finding the user by email
      const user = this.signupUsers.find(m => m.email === email);

      

      if (user) {

        const passwordMatches = bcrypt.compareSync(password, user.password);

        if (passwordMatches) {
          this.authService.login(email);
          this.userEmail = email;
          this.route.navigate(['']);
        } else {
          alert('Wrong credentials');
        }
      } else {
        alert('User not found');
      }
    } else {
      alert('Please enter valid credentials');
    }
  }

  signup() {
    this.route.navigate(['app-signup']);
  }

  logout(){
    localStorage.removeItem('email');
    this.userEmail = null;
    this.route.navigate(['app-login']);
    document.cookie = '';
  }
}
