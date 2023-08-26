import { Component } from '@angular/core';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export interface todoType {
  completed: boolean;
  createdAt: string;
  icon: any;
  listItem: string;
  place: string;
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

  constructor(private dialog: MatDialog) {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      this.todoList = JSON.parse(storedList);
    }
  }

  openAddTodoDialog(): void {
    this.getData(this.todoText);
  }

  getData(val: string): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '400px',
      data: {
        completed: false,
        createdAt: new Date().toLocaleTimeString('en-US'),
        icon: '',
        listItem: val,
        place: '',
      },
    });

    dialogRef.afterClosed().subscribe((result: todoType) => {
      if (result) {
        this.todoList.push(result);
        this.saveTodoListToLocalStorage();
      }
    });
  }

  taskCompleted(item: todoType) {
    item.completed = !item.completed;
    this.saveTodoListToLocalStorage();
    console.log(item)
  }

  private saveTodoListToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
