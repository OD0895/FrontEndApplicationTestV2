import { TodoItem } from 'src/app/interfaces/todo-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  readonly urlApi: string = `${environment.urlApi}/todos`;

  private todoList: Subject<TodoItem[]> = new Subject<TodoItem[]>();
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    this.getDataStore();
  }

  getDataStore() {
    console.log("getDataStore");
    this.http.get<TodoItem[]>(this.urlApi).subscribe(
      response => this.todoList.next(response['todosList'])
    );
  }

  getTodoList() {
    return this.todoList.asObservable();
  }

  addItem(item: TodoItem) {
    this.http.post(this.urlApi, item,
      {headers: this.headers}).subscribe(
      () => this.getDataStore(),
      () => {},
      () => {}
    );
  }

  updateItem(item: TodoItem, changes) {
    return this.http.put(`${this.urlApi}/${item._id}`,
      JSON.stringify({
        ...item,
        completed: changes
      }),
      {headers: this.headers}).subscribe(
      () => this.getDataStore()
    );
  }

  deleteItem(item: TodoItem) {
    return this.http.delete(`${this.urlApi}/${item._id}`).subscribe(
      () => this.getDataStore()
    );
  }
}
