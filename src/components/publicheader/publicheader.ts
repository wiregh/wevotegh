import { Component } from '@angular/core';
import {ModalController, ModalOptions} from "ionic-angular";
import {LoginModalComponent} from "../../pages/login/login-modal";

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

  constructor(private modalCtrl: ModalController) {
    console.log('Hello Publicheader Component');
    this.text = 'Hello World';
  }
  presentLoginModal() {
    // let mo: ModalOptions;
    // mo.showBackdrop=false;
    // mo.enableBackdropDismiss= true;
    let profileModal = this.modalCtrl.create(LoginModalComponent, { userId: 8675309 });
    profileModal.present();
  }

}

