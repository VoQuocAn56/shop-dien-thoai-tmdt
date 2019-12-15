import { Injectable } from '@angular/core';
import {ProductModel} from '../model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class IphoneService {
  /*
  public listIphone: ProductModel[] = [
    {
      ID:1,
      Name: "iPhone 11 Pro 64GB", 
      Price: 30.990, 
      Screen:'5.8 inchs',
      img:'../../../assets/product/Iphone/iphone11pro(2).png'
    },
    {
      ID:2,
      Name: "iPhone 11 Pro 64GB", 
      Price: 30.990, 
      Screen:'5.8 inchs',
      img:'../../../assets/product/Iphone/iphone11pro(2).png'
    },
    /*
    {
      ID:2,
      Name: "iPhone 11 Pro 64GB", 
      Price: 30.990, 
      Screen:'5.8 inchs',
      img:'../../../assets/product/Iphone/iphone11pro.png'
    },
    {
      ID:2,
      Name: "iPhone 11 Pro 64GB", 
      Price: 30.990, 
      Screen:'5.8 inchs',
      img:'../../../assets/product/Iphone/iphone11promax.png'
    },
   
  ];
*/
  constructor() { }

  GetAll():ProductModel[]{
    return null;
  }

}
