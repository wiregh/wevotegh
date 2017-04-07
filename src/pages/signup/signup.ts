import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {AuthService} from "../../providers/authservice";
import {ViewMode} from "../../providers/view-mode";
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../pages/login/login";
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  signupForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthService, private formBuilder: FormBuilder, public viewMode: ViewMode) {
     
     this.signupForm = formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
      mobilePhone: ["", [Validators.required]],
      email: ["", [Validators.required]]

    });
  }

  ionViewDidLoad() {
    
  }

}
