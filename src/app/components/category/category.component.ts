import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  //injilance etmeyeceğim, referans yapısından yararlanacaağım dediğimiz için
  //tsconfig.json dosyasına strictPropertyInitialization:false yazdık
  currentCategory: Category;
  dataLoaded = false;

  //burada product.component, product.service'i kullanabilir dedik.
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    //burada productservice'de bulunan getProducts metodundan gelen dataya abone ol ve products[] abone
    //olduğumuz datanın data dizinine eşitle dedik.
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  //Burası html'de bulunan click için yazılmış metotdur.
  setCurrentCagetory( category: Category) {
    this.currentCategory = category;
  }

  getCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
