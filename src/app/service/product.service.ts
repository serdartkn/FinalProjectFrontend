import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44332/api/';

  constructor(private httpClient: HttpClient) {}

  //burada ise diyoruz ki sen subscribe yani abone olucnabilecek bir responsemodel döneceksin(bu yüzden
  //metot içi return olacak)
  getProducts(): Observable<ListResponseModel<Product>> {
    //this üstteki class'a denk geliyor.
    //httpclient nesnesinin getini kullanıyoruz ve get'e parantez içinde data alacağı yeri söyleyip alacağı bu
    //datayı ise <> parantez içindeki Model'e map edeceğimizi söylüyoruz.
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    let newPath = this.apiUrl + "products/add";
    //Burada hangi adrese (add adresine) ne göndereyim (productı) sorusuna cevap veriyoruz.
    return this.httpClient.post<ResponseModel>(newPath, product);
  }
}