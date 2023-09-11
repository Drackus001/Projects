import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.models';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    console.log('Hellow');
    this.todos$ = this.todoService.getAllTodos();
  }
}
