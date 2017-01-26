import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicPage');
  }
}


