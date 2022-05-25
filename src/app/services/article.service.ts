import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '../models/iarticle';

const devUrl = `http://localhost:4000/`

export const backendURL = {
  articles: devUrl + 'articles'
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<IArticle[]>(backendURL.articles);
  }

  addArticle(article: IArticle) {
    return this.http.post<IArticle>(backendURL.articles, article);
  }

  updateArticle(article: IArticle) {
    return this.http.put<IArticle>(backendURL.articles + '/' + article.id, article);
  }

  deleteArticle(id: number) {
    return this.http.delete<IArticle>(backendURL.articles + '/' + id);
  }

  getArticle(id: string) {
    return this.http.get<IArticle>(backendURL.articles + '/' + id);
  }

}
