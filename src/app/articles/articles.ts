import { Component } from '@angular/core';
import { Article } from '../article/article';
import { data } from '../data/seed.js';

export interface IArticle {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
}

@Component({
  selector: 'app-articles',
  imports: [Article],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {
  articles: IArticle[] = data;
}
