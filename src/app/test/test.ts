import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  @Input() users!: { name: string }[];

  constructor() {}

  ngOnInit(): void {}
}
