import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchasedProductsPage } from './purchased-products';

@NgModule({
  declarations: [
    PurchasedProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchasedProductsPage),
  ],
})
export class PurchasedProductsPageModule {}
