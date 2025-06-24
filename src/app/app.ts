import { Component } from '@angular/core';
import { Articles } from './articles/articles';
import { List } from './list/list';
import { Couter } from './couter/couter';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  imports: [Articles, List, Couter, Test],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Article Site';

  users = [
    {
      name: 'Ivan',
    },
    {
      name: 'Pescho',
    },
  ];

  addUserHandler(nameInput: HTMLInputElement): void {
    const { value: name } = nameInput;
    this.users.push({ name });
    nameInput.value = '';
  }
}
