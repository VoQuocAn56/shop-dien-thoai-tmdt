import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { ProductModel } from 'src/app/model/ProductModel';
import {IphoneService} from '../../../service/Iphone.service';
import {CartModel} from '../../../model/CartModel';

@Component({
  selector: 'app-detail-iphone',
  templateUrl: './detail-iphone.component.html',
  styleUrls: ['./detail-iphone.component.css']
})
export class DetailIphoneComponent implements OnInit {
  public iphoneID: string;
  public ListIphones: ProductModel[];
  public detailIphone: ProductModel;
  
  public totalDetailIphone: number = 0;

  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private iphoneService: IphoneService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.iphoneID = id;
    })
    
    this.ListIphones = this.iphoneService.GetAll();
    this.GetInfoIphoneByID(this.iphoneID);
  }
  
  OnBuyProduct(){
    this.router.navigate(['/cart'])
    this.SaveProductTolocalStorage(this.detailIphone);
  }

  GetInfoIphoneByID(id:string){
    for(let item of this.ListIphones){
      if(item.ProductID == id){
        this.detailIphone = item
      }
    }
    return null
  }

  SaveProductTolocalStorage(Product:ProductModel){
    let item:CartModel = {
      product: Product,
      quantity: 1,
      total: Product.Price
    }

    if (localStorage.getItem('cart')== null) {
      let ListProduct = [];
      ListProduct.push(item);
      localStorage.setItem('cart', JSON.stringify(ListProduct));
      console.log('null: ');
    }
    else{
      let items = []
      items = JSON.parse(localStorage.getItem('cart'));

      let isCheckUpdateCart = this.UpdateCartWhenSameNameProduct(items, item.product.id);

      if (isCheckUpdateCart == false) {
        items.push(item);
        localStorage.setItem('cart', JSON.stringify(items));
      }
      console.log(items);
    }
  }

  UpdateCartWhenSameNameProduct(cart: CartModel[],IdProduct:number):Boolean{
    for(let items of cart){
      if(items.product.id == IdProduct){
        items.quantity += 1;
        items.total = items.total + items.product.Price;

        localStorage.setItem('cart', JSON.stringify(cart));
        return true;
      }
    }
    return false;
  }
}

