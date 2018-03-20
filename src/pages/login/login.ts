import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProductsPage } from '../list-products/list-products';
import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams) { }

  onGoToProducts() {
    this.navCtrl.push(HomePage);
  }

}
