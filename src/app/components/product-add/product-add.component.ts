import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }
  //ürün eklerken formda olmasını ıstedgımız alanları buraya ekleyeceıgz.
  //bu alanlar model de bunana alanlarla aynı ısımde olmalı
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      //köşeli parantez içine productname e default değer vermek ıstedıgımız durumlarda "" içi doldurulur.
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  //Value bize forumdaki alanların karşılıklarını getirir (obje olarak).
  add() {
    //burada formdan obje olarak gelen bilgileri productmodel'e dönüştürüyoruz. assing içinde bulunan köşeli parantez içi boş bir obje içine ise
    //this.productAddForm.value buradaki değerleri veriyoruz.
    //data yazan yere response de diyebiliriz.
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı')
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i <responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası");
            }
            
          }
        }
      );
    } else {
      this.toastrService.error('Ürün Bilgileri Hatalı', 'Dikkat');
    }
  }
}
