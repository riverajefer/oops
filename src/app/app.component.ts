import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StartPage } from '../pages/start/start';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from './../pages/profile/profile';
import { FavoritesPage } from './../pages/favorites/favorites';
import { PurchasedProductsPage } from '../pages/purchased-products/purchased-products';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;

  pages: Array<{ title: string, component: any, img: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, img: 'perfil.png' },
      { title: 'Perfil', component: ProfilePage, img: 'perfil.png' },
      { title: 'Administrador de taquilla', component: HomePage, img: 'admin.png' },
      { title: 'Productos comprados', component: PurchasedProductsPage, img: 'productos_comprados.png' },
      { title: 'Favoritos', component: HomePage, img: 'favoritos.png' },
      { title: 'Buscar producto', component: HomePage, img: 'buscar_producto.png' },
      { title: 'Leer código', component: HomePage, img: 'leer_codigo.png' },
      { title: 'Contáctenos', component: HomePage, img: 'contacto.png' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.show();
      this.statusBar.backgroundColorByHexString('#c1272d');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
