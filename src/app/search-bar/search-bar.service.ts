import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) { }

  getNews(id: string) {
    return this.http.get(`https://www.publico.pt/api/list/search?query=${id}`)
  }
}
