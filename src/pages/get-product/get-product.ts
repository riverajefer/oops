import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProductsPage } from '../list-products/list-products';

@IonicPage()
@Component({
  selector: 'page-get-product',
  templateUrl: 'get-product.html',
})
export class GetProductPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetProductPage');
  }
  onGoBack() {
    this.navCtrl.push(ListProductsPage);
  }
}
