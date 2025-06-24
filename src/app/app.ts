import { Component } from '@angular/core';
import { Articles } from './articles/articles';
import { List } from './list/list';
import { Couter } from './couter/couter';

@Component({
  selector: 'app-root',
  imports: [Articles, List, Couter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Article Site';
}
