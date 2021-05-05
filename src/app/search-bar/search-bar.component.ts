import { Component, OnInit } from '@angular/core';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  // news: any
  // id: string = ''

  constructor(private service: SearchBarService) { }

  ngOnInit(): void {
    // this.initCurrentNew()
  }

  // getNews(id: string) {
  //   this.service.getNews(id)
  //   .subscribe(response => this.news = response
  //     )
  //   }

  // initCurrentNew() {
  //   this.service.getNews(this.id).subscribe(response => {
  //     this.news = response
  //     this.news = [this.news]
  //   });

  // }
}
