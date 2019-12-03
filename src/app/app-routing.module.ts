import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAppleComponent} from '../app/components/home/homeApple/homeApple.component';
import { CartComponent } from './components/cart/cart.component';

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
  {
    path:'homeMac',
    loadChildren: () => import('./components/home-mac/home-mac.module').then(m => m.HomeMacModule) 
  },
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
