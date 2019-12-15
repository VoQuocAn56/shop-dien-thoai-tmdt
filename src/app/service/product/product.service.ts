import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductModel } from "../../model/ProductModel";
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  readonly RootURL = "https://localhost:44350/"

  constructor(private httpClient: HttpClient) { }

  GetIphoneProductFromService():Observable<ProductModel[]>{
    const CategoryIphoneID = "CT01"
    return this.httpClient.get<ProductModel[]>(this.RootURL + "api/Product/GetProductByCategoryID/" + CategoryIphoneID).pipe(
      tap(() => console.log("Get iphone product success")),
      catchError((err:any) => of)
    )               
  }
}
