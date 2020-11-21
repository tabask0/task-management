import { Column } from './../../models/column-models';
import { Board } from './../../models/board-model';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  board: Board = new Board('Test Board', [
    new Column('Ideas', ['Some random idea', 'Plimba Cainele', 'Spala masina']),
    new Column('Todo', [
      'Alimenteaza masina',
      'Spala vasele',
      'Nu mai da banii pe lucruri inutile',
    ]),
    new Column('In Progress', ['Cumpara PS5', 'Cauta job', 'Stai la izolare']),
    new Column('Done', [
      'Cumpara domeniu codiver.ro',
      'Fa transferul domeniului',
    ]),
  ]);

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
