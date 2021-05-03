import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  news: any
  // queryName: string

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryNews();
  }

  getCategoryNews(queryName: string = 'popular') {
    this.categoryService.getCategoryNews(queryName)
      .subscribe(response => this.news = response
    )
  }

  selectedCategory(queryName: string) {
    queryName = queryName;

    console.log(queryName)

    // Erro aqui
    this.getCategoryNews(queryName);
  }
}
