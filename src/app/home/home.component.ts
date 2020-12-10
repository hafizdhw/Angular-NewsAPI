import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleModel, BaseModel } from '../models/article.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search : string = "";
  list : Array<ArticleModel> = [];
  constructor(
    public _service: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onSearch(true);
  }

  readMore(item : ArticleModel){
    this._service.article = item;
    this.router.navigate(['/detail']);
  }

  onSearch(isInit : boolean) {
    this._service.isLoading = true;
    this._service.Get(isInit ? "bitcoin" : this.search).subscribe((data: BaseModel) => {
      this.list = data.articles;
      this._service.isLoading = false;
    });
  }
}
