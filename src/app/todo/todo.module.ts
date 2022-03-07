import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule  } from './todo.routing.module';
import { SharedModule } from '@shared/shared.module';

import { TodoListComponent } from './todo-list/todo-list.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListService } from '../services/todo-list.service';
import { MaterialModule  } from '../material/material.module';

@NgModule({
  declarations: [
    TodoListComponent,
    InputButtonComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [TodoListService],
})

export class TodoModule { }
