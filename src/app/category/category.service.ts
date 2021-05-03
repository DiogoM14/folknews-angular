import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategoryNews(queryName: string) {
    return this.http.get(`https://www.publico.pt/api/list/${queryName}`)
  }
}
