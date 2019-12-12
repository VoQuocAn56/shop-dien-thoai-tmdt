import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CategoryService} from "../../../service/category/category.service";
import {CategoryModel} from "../../../model/CategoryModel";

@Component({
  selector: 'app-TopHeader',
  templateUrl: './TopHeader.component.html',
  styleUrls: ['./TopHeader.component.css']
})

export class TopHeaderComponent implements OnInit {

  ListCatogories:CategoryModel[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private categoryService:CategoryService
  ) { }

  ngOnInit() {
    this.GetCategoryFromService();
  }

  //API
  GetCategoryFromService(){
    this.categoryService.GetCategory().subscribe(data =>{
      this.ListCatogories = data;
    })
  }

  //router
  OnGotoHomeProduct(CategoryModel:CategoryModel){
    switch(CategoryModel.CategoryName){
      case "Iphone": this.router.navigate(['/homeIphone']); break;
      case "Ipab":  this.router.navigate(['/homeIpab']); break;
      case "Mac": this.router.navigate(['/homeMac']); break;
      case "AppleWatch": this.router.navigate(['/homeAppleWatch']); break;
    }
  }

  OnGoToMainHome(){
    this.router.navigate(['/HomeApple']);
  }
}
