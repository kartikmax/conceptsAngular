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
  private complete = 0;
  private incomplete = 0;

  constructor(private dialog: MatDialog) {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      this.todoList = JSON.parse(storedList);
    }
    this.updateCounts(); // Initialize counts
  }

  private countCompletedTodoItems(): number {
    return this.todoList.filter((todo) => todo.completed).length;
  }

  private updateCounts(): void {
    this.complete = this.countCompletedTodoItems();
    this.incomplete = this.todoList.length - this.complete;
  }

  public openAddTodoDialog(): void {
    this.getData(this.todoText);
  }

  public getData(val: string): void {
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

  public taskCompleted(item: todoType): void {
    item.completed = !item.completed;
    this.saveTodoListToLocalStorage();
    this.updateCounts();
  }

  private saveTodoListToLocalStorage(): void {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  public getCompletedCount(): number {
    return this.complete;
  }

  public getIncompleteCount(): number {
    return this.incomplete;
  }
}
