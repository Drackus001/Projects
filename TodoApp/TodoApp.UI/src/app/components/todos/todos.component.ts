import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Todo[] = [];
}
