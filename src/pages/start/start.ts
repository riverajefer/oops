import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { RegisterPage } from './../register/register';


@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  onEnter() {
    this.navCtrl.push(LoginPage);
  }

  onRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
