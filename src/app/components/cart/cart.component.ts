import { Component, OnInit } from '@angular/core';
import {CartModel} from '../../model/CartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ListCartProduct: CartModel[];
  TotalCartProduct: number = 0;
  ChangeCountProduct: number = 0;
  CountProduct: number = 0;

  constructor() { }

  ngOnInit() {
    let items = []
    if(localStorage.getItem('cart') != null){
      items = JSON.parse(localStorage.getItem('cart'));
      this.ListCartProduct = items;
      console.log(this.ListCartProduct);
    }
    this.TotalProductInCart();
    this.CountProductInCart();

    console.log(this.TotalCartProduct);
  }

  TotalProductInCart(){
    for(let item of this.ListCartProduct){
      this.TotalCartProduct += item.total; 
    }
  }

  CountProductInCart(){
    for(let item of this.ListCartProduct){
      this.CountProduct += 1; 
    }
  }

  OnClickIncreaseCount(cartModel: CartModel){
    cartModel.quantity += 1;
    //this.ChangeCountProduct += 1;
    console.log("increase count");
  }

  OnClickReduceCount(cartModel:CartModel ){
    if(cartModel.quantity != 0){
      cartModel.quantity -=1;
    }
    
    console.log("reduce count");
  }
}
