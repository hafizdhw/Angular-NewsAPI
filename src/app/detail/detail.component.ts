import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../models/article.model';
import { AppService } from '../services/app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  item: ArticleModel = {} as ArticleModel;
  constructor(private _service: AppService, public location: Location) {}

  ngOnInit(): void {
    if(this._service.isEmpty(this._service.article)){
      this.location.back();
    }
    this.item = this._service.article;
    this.item.publishedAt = new Date(this.item.publishedAt).toDateString()
  }

}
