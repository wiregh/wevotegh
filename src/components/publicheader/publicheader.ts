import { Component } from '@angular/core';
import {ModalController, ModalOptions, NavController} from "ionic-angular";
import {LoginPage} from "../../pages/login/login";
import {TestloginPage} from "../../pages/testlogin/testlogin";

/*
  Generated class for the Publicheader component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'publicheader',
  templateUrl: 'publicheader.html'
})
export class PublicheaderComponent {

  text: string;

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) {
    console.log('Hello Publicheader Component');
    this.text = 'Hello World';
  }

  loginClick(){
    this.navCtrl.setRoot(LoginPage);
  }
  presentLoginModal() {
    // let mo: ModalOptions;
    // mo.showBackdrop=false;
    // mo.enableBackdropDismiss= true;
    let profileModal = this.modalCtrl.create(LoginPage);

    profileModal.present();
  }



}

