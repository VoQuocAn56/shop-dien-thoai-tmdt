import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../../model/ProductModel';
import {ProductService} from '../../../service/product/product.service';

@Component({
  selector: 'app-list-proudct-iphone',
  templateUrl: './list-proudct-iphone.component.html',
  styleUrls: ['./list-proudct-iphone.component.css']
})
export class ListProudctIphoneComponent implements OnInit {

  ListIphone:ProductModel[];
  public ListCount:any = [1,2,3,4]; 
  
  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    //this.router.navigate(['/iphone'], {relativeTo: this.activatedRoute});
    this.GetAllProductIphone();
  }
  GetAllProductIphone(){
    this.productService.GetIphoneProductFromService().subscribe(data => {
      this.ListIphone = data
    });
    console.log(this.ListIphone);
  }

  onGoToDetailIphone(item: ProductModel){
    
    this.router.navigate(['./detail',item.ProductID],{relativeTo:this.activatedRoute});
  }
}
