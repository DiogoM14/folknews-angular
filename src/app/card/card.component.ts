import { Component, Input, OnInit } from '@angular/core';

interface newsProps {
  titulo: string
  multimediaPrincipal: string
  autores: []
  descricao: string
  data: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() news: any = [];
  filteredNews: any

  constructor() { }

  ngOnInit(): void {
  }

  getNewsID(news: any) {
    const filteredNews = news
    return filteredNews
  }
}
