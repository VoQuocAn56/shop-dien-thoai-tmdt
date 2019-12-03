import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIpabComponent } from './list-ipab/list-ipab.component';
import { DetailIpabComponent } from './detail-ipab/detail-ipab.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeIpabComponent } from './home-ipab.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeIpabComponent, 
    children:[
      {path:'', component:ListIpabComponent},
      {path:'detail/:id',component: DetailIpabComponent}
    ]
  }
]
@NgModule({
  declarations: [
    ListIpabComponent,
    DetailIpabComponent,
    HomeIpabComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeIpabModule { }
