import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetProductPage } from '../get-product/get-product';


@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
    {  }

  onGoBack() {
    this.navCtrl.pop()
  }

  onGetProduct() {
    this.navCtrl.push(GetProductPage)
  }
}
