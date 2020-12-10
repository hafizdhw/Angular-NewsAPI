export interface BaseModel {
  status: string;
  totalResults: number;
  articles: ArticleModel[];
}

export interface ArticleModel {
  source: SourceModel;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface SourceModel {
  id?: any;
  name: string;
}
