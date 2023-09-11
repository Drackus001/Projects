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
}
