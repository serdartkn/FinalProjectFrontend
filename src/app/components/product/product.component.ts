import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListResponseModel } from 'src/app/models/productListResponseModel';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  //burada product.component, product.service'i kullanabilir dedik.
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    //burada productservice'de bulunan getProducts metodundan gelen dataya abone ol ve products[] abone
    //olduğumuz datanın data dizinine eşitle dedik.
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
