import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ListProductsPage } from './../list-products/list-products';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
  }

  toggleMenu() {
    console.log('toggleMenu');
    this.menuCtrl.toggle();
  }

  goToListProducts() {
    this.navCtrl.push(ListProductsPage);
  }

}
