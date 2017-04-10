import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
/*
  Generated class for the Public page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-public',
  templateUrl: 'public.html'
})
export class PublicPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }
  presentsignupModal() {
    // let mo: ModalOptions;
    // mo.showBackdrop=false;
    // mo.enableBackdropDismiss= true;
    let profileModal = this.modalCtrl.create(SignupPage);

    profileModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicPage');
  }
}


