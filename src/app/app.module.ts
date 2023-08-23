import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'; // Add this import
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field'
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component'; // Adjust the path accordingly

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, // Add MatDialogModule to your imports
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
