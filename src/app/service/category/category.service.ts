import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {CategoryModel} from "../../model/CategoryModel";
import { tap, map, catchError } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly  rootURL = "https://localhost:44350/api/Category"
  constructor(private httpClient: HttpClient) { }

  GetCategory():Observable<CategoryModel[]>{
    return this.httpClient.get<CategoryModel[]>(this.rootURL).pipe(
      tap(() => console.log('Get category success')),
      catchError((err:any)=> of)
    );
  }

}
