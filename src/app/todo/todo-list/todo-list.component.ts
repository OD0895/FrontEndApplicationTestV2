import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList : Observable<TodoItem[]>;

  constructor(private todoListService: TodoListService) {
    console.log('TodoListComponent.constructor()');
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  public ngOnDestroy(): void {

  }

  addItem(title: string): void {
    this.todoListService.addItem({ title, completed: false });
  }

  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }
}
