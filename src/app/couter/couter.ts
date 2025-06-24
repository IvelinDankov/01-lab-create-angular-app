import { Component } from '@angular/core';

@Component({
  selector: 'app-couter',
  imports: [],
  templateUrl: './couter.html',
  styleUrl: './couter.scss',
})
export class Couter {
  couter = 0;

  constructor() {
    const couter = setInterval(() => {
      this.couter++;
    }, 5000);
  }
}
