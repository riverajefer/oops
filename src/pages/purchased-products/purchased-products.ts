import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-purchased-products',
  templateUrl: 'purchased-products.html',
})
export class PurchasedProductsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchasedProductsPage');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  onGoBack() {
    this.navCtrl.push(HomePage)
  }
}
