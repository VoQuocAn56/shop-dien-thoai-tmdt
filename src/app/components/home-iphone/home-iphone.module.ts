import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailIphoneComponent} from '../home-iphone/detail-iphone/detail-iphone.component';
import {Routes, RouterModule} from '@angular/router';
import {HomeIphoneComponent} from '../home-iphone/home-iphone.component';
import { ListProudctIphoneComponent } from './list-proudct-iphone/list-proudct-iphone.component';


const routes:Routes = [
  {
    path:'', 
    component:HomeIphoneComponent,
    children:[
      {path:'', component:ListProudctIphoneComponent}, 
      {path:'detail/:id', component:DetailIphoneComponent}
    ]
  },
]

@NgModule({
  declarations: [
    DetailIphoneComponent,
    HomeIphoneComponent,
    ListProudctIphoneComponent,
    //TopHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeIphoneModule { }
