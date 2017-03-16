import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {PublicPage} from "../pages/public/public";
import {MobileLoginPage} from "../pages/mobile-login/mobile-login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = MobileLoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
