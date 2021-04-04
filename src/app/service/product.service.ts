import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListResponseModel } from 'src/app/models/productListResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44332/api/products/getall'; 

  constructor(private httpClient: HttpClient) {}

  //burada ise diyoruz ki sen subscribe yani abone olucnabilecek bir responsemodel döneceksin(bu yüzden 
  //metot içi return olacak)
  getProducts():Observable<ProductListResponseModel> {
    //this üstteki class'a denk geliyor.
    //httpclient nesnesinin getini kullanıyoruz ve get'e parantez içinde data alacağı yeri söyleyip alacağı bu
    //datayı ise <> parantez içindeki Model'e map edeceğimizi söylüyoruz.
    return this.httpClient.get<ProductListResponseModel>(this.apiUrl);
  }
}
