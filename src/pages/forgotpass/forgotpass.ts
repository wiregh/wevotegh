import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html'
})
export class ForgotpassPage {

  forgotpassForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthService, private formBuilder: FormBuilder, public viewMode: ViewMode) {
     
     this.forgotpassForm = formBuilder.group({
    
      email: ["", [Validators.required]]

    });
  }

  ionViewDidLoad() {
    
  }

}

