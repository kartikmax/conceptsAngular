import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, TodoComponent, AddTodoDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
