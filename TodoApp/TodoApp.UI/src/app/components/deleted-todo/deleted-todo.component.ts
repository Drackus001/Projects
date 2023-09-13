import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrls: ['./deleted-todo.component.scss'],
})
export class DeletedTodoComponent {
  public todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    console.log('@Components>>Deleted-Todo => OnInit()');
    this.getAllDeletedTodos();
  }

  private getAllDeletedTodos(): void {
    this.todoService.getAllDeletedTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
    });
  }
}
