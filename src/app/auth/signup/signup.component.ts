import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  validated : boolean; 

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signInUser(email, password);
    form.resetForm();
    this.validated = this.authService.getValidationStatus();
    console.log(this.validated);
    console.log(this.authService.getValidationStatus());
  }

  onLogout(){
    this.authService.logOut();
  }
}
