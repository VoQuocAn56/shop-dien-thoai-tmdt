import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMacComponent } from './home-mac.component';
import { ListMacComponent } from './list-mac/list-mac.component';
import { DetailMacComponent } from './detail-mac/detail-mac.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component: HomeMacComponent,
    children:[
      {path:'', component: ListMacComponent},
      {path:'detail/:id', component: DetailMacComponent}
    ]
  }
]
@NgModule({
  declarations: [
    HomeMacComponent,
    ListMacComponent,
    DetailMacComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeMacModule { }
