  import { Component } from '@angular/core';
  import {FormBuilder, FormGroup, Validators} from '@angular/forms'
  import {AuthService} from "../../providers/authservice";
  import {ViewMode} from "../../providers/view-mode";
  import {SignupPage} from "../signup/signup";
  import {ForgotpassPage} from "../forgotpass/forgotpass";
  import { NavController, NavParams } from 'ionic-angular';
  import {ModalController} from "ionic-angular";
/*
  Generated class for the LoginModal component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage{
auth: AuthService;
  // When the page loads, we want the Login segment to be selected
  authType: string = "login";
  text: string;
loginForm: FormGroup;

signupForm: FormGroup;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private formBuilder: FormBuilder, public viewMode: ViewMode) {
    
//loginForm fields
    this.loginForm = formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
      rememberMe: [false]
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
presentsignupModal() {
    // let mo: ModalOptions;
    // mo.showBackdrop=false;
    // mo.enableBackdropDismiss= true;
    let profileModal = this.modalCtrl.create(SignupPage);

    profileModal.present();
  }

  presentforgotpassModal() {
    // let mo: ModalOptions;
    // mo.showBackdrop=false;
    // mo.enableBackdropDismiss= true;
    let profileModal = this.modalCtrl.create(ForgotpassPage);

    profileModal.present();
  }
 

}
