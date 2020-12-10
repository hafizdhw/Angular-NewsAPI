import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleModel, BaseModel } from '../models/article.model';

@Injectable()
export class AppService {
  apiKey = '43603cfafa284879b552f3df7fbe3d6f';
  header: any;
  _article: ArticleModel = {} as ArticleModel;
  _isLoading: boolean = false;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders();
  }

  Get(search: string): Observable<BaseModel> {
    return this.http.get<BaseModel>(
      'http://newsapi.org/v2/everything?q=' +
        search +
        '&from=2020-11-10&sortBy=publishedAt&apiKey=' +
        this.apiKey,
      { headers: this.header }
    );
  }

  get article() {
    return this._article;
  }

  set article(data: ArticleModel) {
    this._article = data;
  }

  get isLoading() {
    return this._isLoading;
  }

  set isLoading(isLoad: boolean) {
    this._isLoading = isLoad;
  }

  isEmpty(obj: any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
}
