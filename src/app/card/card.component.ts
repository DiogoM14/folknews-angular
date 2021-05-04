import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() news: any = [];

  id: any
  newsData: any

  constructor(private service: CardService, private router: Router) { }

  ngOnInit(): void {
  }

  // getNews(id: string) {
  //   console.log("Rodou")
  //   this.service.getNews(id)
  //   .subscribe(response => this.newsData = response
  //     )
  //   }
}
