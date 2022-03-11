import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Array<Todo> = [];

  constructor(private store: Store<{todo: Array<Todo>}>) { }

  ngOnInit(): void {
    this.store.select('todo')
      .subscribe((data: Array<Todo>) => this.todoList = data);
  }

}
