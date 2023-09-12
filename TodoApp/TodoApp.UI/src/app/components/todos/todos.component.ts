import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];
  public newTodo: Todo = this.resetNewTodo();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    console.log('C::Todos => OnInit()');
    this.getAllTodos();
  }

  addTodo(): void {
    console.log(this.newTodo);
    this.todoService.addTodo(this.newTodo).subscribe({
      next: (todo) => {
        this.getAllTodos();
      },
    });
  }

  private getAllTodos(): void {
    this.todoService.getAllTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
    });
  }

  private resetNewTodo(): Todo {
    let tempTodo: Todo = {
      id: '',
      createdAt: new Date(),
      title: '',
      isCompleted: false,
      completedAt: new Date(),
    };
    return tempTodo;
  }
}
