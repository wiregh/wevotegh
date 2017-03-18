import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {PublicPage} from "../pages/public/public";
import {MobileLoginPage} from "../pages/mobile-login/mobile-login";
import {ViewMode} from "../providers/view-mode";
import {LoginPage} from "../pages/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 public  rootPage: any;

  constructor(platform: Platform, viewMode: ViewMode) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (viewMode.isBrowser){
        this.rootPage = PublicPage;
      }else {
        this.rootPage=LoginPage;
      }
      StatusBar.styleDefault();
      Splashscreen.hide();
    });


  }


}
