import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { StartPage } from '../pages/start/start';
import { ListProductsPage } from '../pages/list-products/list-products';
import { ProductDetailsPage } from './../pages/product-details/product-details';
import { RegisterPage } from './../pages/register/register';
import { PurchasedProductsPage } from '../pages/purchased-products/purchased-products';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GetProductPage } from '../pages/get-product/get-product';
import { ServicesProvider } from '../providers/services/services';
import { PayPage } from '../pages/pay/pay';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    StartPage,
    ListProductsPage,
    ProductDetailsPage,
    GetProductPage,
    RegisterPage,
    PayPage,
    ProfilePage,
    PurchasedProductsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    StartPage,
    ListProductsPage,
    ProductDetailsPage,
    GetProductPage,
    RegisterPage,
    PayPage,
    ProfilePage,
    PurchasedProductsPage
  ],
  providers: [
    StatusBar,
    HttpClientModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider,

  ]
})
export class AppModule {}
