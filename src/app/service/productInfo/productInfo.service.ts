import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {ProductInfoModel} from '../../model/ProductInfoModel';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  readonly RootURL = "https://localhost:44350/"
  constructor(private httpClient:HttpClient) { }

  GetProductInfoByProductID(ProductID:string):Observable<ProductInfoModel>{
    return this.httpClient.get<ProductInfoModel>(this.RootURL + "api/ProductInfo/" + ProductID).pipe(
      tap(() => console.log("get product info by productId is success")),
      catchError((err:any) => of)
    )
  }

}
