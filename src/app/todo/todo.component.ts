import { Component } from '@angular/core';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component'; // Update the path as needed
import { MatDialog } from '@angular/material/dialog';

export interface todoType {
  completed: boolean;
  listItem: string;
  createdAt: string;
  place: string;
  icon: any;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  title = 'this is todo list';
  todoList: todoType[] = [];
  todoText = '';

  constructor(private dialog: MatDialog) {} // Inject the MatDialog service here

  openAddTodoDialog(): void {
    this.getData(this.todoText);
  }

  getData(val: string): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '400px', // Adjust as needed
      data: { listItem: val, completed: false, createdAt: new Date().toLocaleTimeString('en-US'), place: '', icon: '' },
    });

    dialogRef.afterClosed().subscribe((result: todoType) => {
      if (result) {
        this.todoList.push(result);
      }
    });
  }

  taskCompleted(item: todoType) {
    item.completed = !item.completed;
  }
}
