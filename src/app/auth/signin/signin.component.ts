import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

onSignUp(form : NgForm){

  const email = form.value.email;
  const password = form.value.password;
  console.log(email);
  console.log(password);
  this.authService.signUpUser(email, password);
  form.resetForm();
}
}
