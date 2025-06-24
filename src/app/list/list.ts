import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  listItemToggle: boolean = true;
  public newListItem: string[] = [];

  handleShowList() {
    this.listItemToggle = !this.listItemToggle;
  }

  handleAddItem(input: string) {
    this.newListItem.push(input);
  }
}
