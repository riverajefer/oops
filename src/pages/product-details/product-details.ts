import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GetProductPage } from '../get-product/get-product';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  toggleMenu() {
    console.log('toggleMenu');
   // this.menuCtrl.toggle();
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  onAddProduct(){
    this.navCtrl.push(GetProductPage);
  }

}
