import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
//router
import { AppRoutingModule } from './app-routing.module';
//service
import {IphoneService} from '../app/service/Iphone.service';
//import {CategoryService} from '../../src/app/service/category/category.service';
//components
import { AppComponent } from './app.component';
import {TopHeaderComponent} from '../../src/app/components/home/TopHeader/TopHeader.component'
import {HomeAppleComponent} from '../app/components/home/homeApple/homeApple.component';
import {HomeBannerAppleComponent} from '../app/components/home/HomeBannerApple/HomeBannerApple.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { from } from 'rxjs';

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
    HttpClientModule
  ],
  providers: [
    IphoneService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
