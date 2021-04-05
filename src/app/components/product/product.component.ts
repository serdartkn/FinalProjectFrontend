import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
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
  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    //paramsa categoryid değerimiz geliyor.
this.activatedRoute.params.subscribe(params=>{
  if(params["categoryId"]){
    this.getProductsByCategory(params["categoryId"])
  }else{
    this.getProducts()
  }});
  }

  getProducts() {
    //burada productservice'de bulunan getProducts metodundan gelen dataya abone ol ve products[] abone
    //olduğumuz datanın data dizinine eşitle dedik.
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number) {
    //burada productservice'de bulunan getProducts metodundan gelen dataya abone ol ve products[] abone
    //olduğumuz datanın data dizinine eşitle dedik.
    this.productService.getProductsByCategory(categoryId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  
}
