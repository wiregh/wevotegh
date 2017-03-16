import {NgModule, ErrorHandler} from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Http, RequestOptions} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

import {MyApp} from './app.component';
import {HomePage} from "../pages/home/home";
import {PublicPage} from "../pages/public/public";
import {PublicheaderComponent} from "../components/publicheader/publicheader";
import {LoginModalComponent} from "../pages/login/login-modal";
import {AuthService} from "../providers/authservice";
import {FormBuilder} from "@angular/forms";
import {MobileLoginPage} from "../pages/mobile-login/mobile-login"

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
@NgModule({
  declarations: [
    MyApp,
    PublicPage,
    HomePage,
    MobileLoginPage,
    PublicheaderComponent,
    LoginModalComponent


  ],
  imports: [IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    PublicPage,
    HomePage,
     PublicheaderComponent,
    LoginModalComponent,
    MobileLoginPage
  //
  ],
  providers: [Storage,{provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }, AuthService, FormBuilder
  ]

})
export class AppModule {

}


// provide(AuthHttp, {
//   useFactory: (http) => {
//     return new AuthHttp(new AuthConfig, http);
//   },
//   deps: [Http]
// })
