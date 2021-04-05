import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44332/api/categories/getall'; 

  constructor(private httpClient: HttpClient) {}

  //burada ise diyoruz ki sen subscribe yani abone olucnabilecek bir responsemodel döneceksin(bu yüzden 
  //metot içi return olacak)
  getCategories():Observable<ListResponseModel<Category>> {
    //this üstteki class'a denk geliyor.
    //httpclient nesnesinin getini kullanıyoruz ve get'e parantez içinde data alacağı yeri söyleyip alacağı bu
    //datayı ise <> parantez içindeki Model'e map edeceğimizi söylüyoruz.
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
