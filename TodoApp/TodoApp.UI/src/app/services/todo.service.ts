import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseApiURL = 'https://localhost:7232';

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiURL + '/api/todo');
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    // Empty Guid
    newTodo.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Todo>(this.baseApiURL + '/api/todo', newTodo);
  }

  updateTodo(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseApiURL + '/api/todo/' + id, todo);
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(this.baseApiURL + '/api/todo/' + id);
  }
}
