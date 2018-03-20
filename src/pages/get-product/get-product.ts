import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ListProductsPage } from '../list-products/list-products';
import { ServicesProvider } from './../../providers/services/services';

@IonicPage()
@Component({
  selector: 'page-get-product',
  templateUrl: 'get-product.html',
  providers: [ServicesProvider]
})
export class GetProductPage {

  stateDoor = false;
  loader: any;
  alert: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public servicesProvider: ServicesProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetProductPage');
  }

  onGoBack() {
    this.navCtrl.pop()
  }

  onToogleBox() {
    this.stateDoor = !this.stateDoor;

    this.loader = this.loadingCtrl.create({
      content: 'Espere Por favor...',
    });
    this.loader.present();

    this.servicesProvider.toggleDoor(this.stateDoor).then((response) => {
      console.log('response status door: ', response);

      this.loader.dismiss();

      if (response) {
        if (!this.stateDoor) {
          this.msgDialog('Mensaje !', 'La taquilla se cerró correctamente !')
        } else{
          this.msgDialog('Mensaje !', 'La taquilla se abrió correctamente !')
        }
      } else {
        this.msgDialog('Alerta !', 'Ha ocurrido un error !')
        this.stateDoor = !this.stateDoor;
      }

    });
  }

  private msgDialog(title: string, message: string) {
    this.alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['Ok']
    });
    this.alert.present();
  }

}
