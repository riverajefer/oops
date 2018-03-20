import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PayPage } from './../pay/pay';
import { ProductDetailsPage } from '../product-details/product-details';


@IonicPage()
@Component({
  selector: 'page-list-products',
  templateUrl: 'list-products.html',
})
export class ListProductsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductsPage');
  }

  goToProductDetails() {
    console.log('goToProductDetails');
    this.navCtrl.push(ProductDetailsPage);
  }

  toggleMenu() {
    console.log('toggleMenu');
    this.menuCtrl.toggle();
  }

}
