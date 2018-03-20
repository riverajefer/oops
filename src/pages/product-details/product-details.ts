import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GetProductPage } from '../get-product/get-product';
import { PayPage } from '../pay/pay';

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
    this.menuCtrl.toggle();
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  onAddProduct(){
    this.navCtrl.push(GetProductPage);
  }

  onGoToPayProduct() {
    this.navCtrl.push(PayPage);
  }


}
