import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialogContent} from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';
// import { todoType } from '../todo.component'; // Update the path as needed
import {todoType} from "../todo/todo.component"


@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
})
export class AddTodoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todoItem: todoType
  ) {}

  onAddTodoClick(): void {
    this.dialogRef.close(this.todoItem);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
