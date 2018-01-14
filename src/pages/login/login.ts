import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProductsPage } from '../list-products/list-products';


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
    this.navCtrl.push(ListProductsPage);
  }

}
