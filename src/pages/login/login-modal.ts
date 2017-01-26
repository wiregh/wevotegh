  import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
  import {AuthService} from "../../providers/authservice";

/*
  Generated class for the LoginModal component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.html'
})
export class LoginModalComponent {
auth: AuthService;
  // When the page loads, we want the Login segment to be selected
  authType: string = "login";
  text: string;
loginForm: FormGroup;
signupForm: FormGroup;
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
//loginForm fields
    this.loginForm = formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });


    // //signupForm fields
    // this.signupForm = formBuilder.group({
    //   userName: [""],
    //   password: [""],
    //   passwordConfirm: [""],
    //   firstName: [""],
    //   lastName: [""],
    //   emailAddress: [""],
    //   phone1: [""],
    //   phone2: [""],
    //
    // })

  }

}
