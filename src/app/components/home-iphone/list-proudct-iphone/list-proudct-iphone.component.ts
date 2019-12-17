import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../../model/ProductModel';
import {ProductService} from '../../../service/product/product.service';

@Component({
  selector: 'app-list-proudct-iphone',
  templateUrl: './list-proudct-iphone.component.html',
  styleUrls: ['./list-proudct-iphone.component.css']
})
export class ListProudctIphoneComponent implements OnInit {

  ListIphone:ProductModel[] = [];
  ListRows:any = [0,1]; 

  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
  ) { }

  ngOnInit() {
    //this.router.navigate(['/iphone'], {relativeTo: this.activatedRoute});
    this.GetAllProductIphone();
    console.log(this.ListIphone)
  }


  GetAllProductIphone(){ 
    this.productService.GetIphoneProductFromService().subscribe(data => {
      this.ListIphone = data;
    });
  }

  onGoToDetailIphone(item: ProductModel){
    
    this.router.navigate(['./detail',item.ProductID],{relativeTo:this.activatedRoute});
  }

  LimitListIphone(col:number):ProductModel[]{ 
    switch(col){
      case 0: return this.ListIphone.slice(0,2);
      case 1: return this.ListIphone.slice(2,4);     
    } 
  }
}
