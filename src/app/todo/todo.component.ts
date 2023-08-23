import { Component } from '@angular/core';

interface todoType {
  completed: boolean;
  listItem: string;
  createdAt: string;
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

  getData(val: string): void {
    console.log(val);
    this.todoList.push({
      listItem: val,
      completed: false,
      place: '',
      createdAt: new Date().toLocaleTimeString('en-US'),
    });

    this.todoText = ''; // Clear the input field
    console.log(this.todoList);
  }

  taskCompleted(val: boolean, e: any) {
    console.log(e);
  }
}
