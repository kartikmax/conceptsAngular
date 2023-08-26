import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { todoType } from '../todo/todo.component';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css'],
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
