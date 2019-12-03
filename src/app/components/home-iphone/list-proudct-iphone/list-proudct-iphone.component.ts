import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {IphoneService} from '../../../service/Iphone.service';
import {IphoneModel} from '../../../model/IphoneModel';
@Component({
  selector: 'app-list-proudct-iphone',
  templateUrl: './list-proudct-iphone.component.html',
  styleUrls: ['./list-proudct-iphone.component.css']
})
export class ListProudctIphoneComponent implements OnInit {

  public ListIphone:IphoneModel[];
  public ListCount:any = [1,2,3,4]; 
  
  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private iphoneService:IphoneService,
  ) { }

  ngOnInit() {
    //this.router.navigate(['/iphone'], {relativeTo: this.activatedRoute});
    this.GetAllProductIphone();
  }
  GetAllProductIphone(){
    this.ListIphone = this.iphoneService.GetAll();
  }

  onGoToDetailIphone(item){
    this.router.navigate(['./detail',item.ID],{relativeTo:this.activatedRoute});
  }
}
