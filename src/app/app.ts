import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articles } from './articles/articles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Articles],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Article Site';
}
