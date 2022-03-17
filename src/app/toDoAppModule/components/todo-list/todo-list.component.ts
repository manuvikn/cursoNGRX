import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/redux/filtro/filtro.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Array<Todo> = [];
  filtro: filtrosValidos;

  constructor(private store: Store<{todo: Array<Todo>, filtro: filtrosValidos}>) { }

  ngOnInit(): void {
    this.store
        .subscribe(({todo, filtro}) => {
          this.todoList = todo;
          this.filtro = filtro;
        });
  }

}
