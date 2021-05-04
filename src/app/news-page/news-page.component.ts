import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/card.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})

export class NewsPageComponent implements OnInit {

  news: any

  constructor(private service: CardService) { }

  ngOnInit(): void {
    // this.getNews();
  }

  // getNews() {
  //   this.service.currentData.subscribe(data => this.news = data);
  //   console.log(this.news)
  // }
}
