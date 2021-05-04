import { Component, Input, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() news: any = [];
  id: number = 0

  constructor(private service: CardService) { }

  ngOnInit(): void {
    // this.getNews(this.id);
  }

  // getNews(id: number) {
  //   this.service.getNews(this.id)
  //   .subscribe(response => this.news = response
  //     )
  //   }
}
