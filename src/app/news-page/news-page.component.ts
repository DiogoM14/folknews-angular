import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})

export class NewsPageComponent implements OnInit {

  @Input() filteredNews: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
