import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  news: any = []
  queryName = this.router.url

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoryNews(this.queryName);
  }

  getCategoryNews(queryName: string) {
    this.categoryService.getCategoryNews(queryName)
    .subscribe(response => this.news = response
      )
    }
}
