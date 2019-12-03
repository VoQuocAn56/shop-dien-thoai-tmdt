import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopHeaderComponent} from '../../src/app/components/home/TopHeader/TopHeader.component'
import {HomeAppleComponent} from '../app/components/home/homeApple/homeApple.component';
import {HomeBannerAppleComponent} from '../app/components/home/HomeBannerApple/HomeBannerApple.component';
//import {HomeIphoneComponent} from '../app/components/home-iphone/home-iphone.component';
//import {DetailIphoneComponent} from '../app/components/detail-iphone/detail-iphone.component'
import {IphoneService} from '../app/service/Iphone.service';
import {HomeIphoneModule} from '../app/components/home-iphone/home-iphone.module';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppleComponent,
    TopHeaderComponent,
    HomeBannerAppleComponent,
    CartComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    IphoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
