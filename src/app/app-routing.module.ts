import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAppleComponent} from '../app/components/home/homeApple/homeApple.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeIpabComponent } from './components/home-ipab/home-ipab.component';
//import {HomeIphoneComponent} from '../app/components/home-iphone/home-iphone.component';

const routes: Routes = [
  {path:'',redirectTo:'/HomeApple', pathMatch:'full'},
  {path: 'HomeApple', component: HomeAppleComponent},
  {
    path:'homeIphone', 
    loadChildren: () => import('./components/home-iphone/home-iphone.module').then(m => m.HomeIphoneModule)
  },
  {
    path: 'homeIpab',
    loadChildren: () => import('./components/home-ipab/home-ipab.module').then(m => m.HomeIpabModule)
  },
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
