import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleAll } from '../redux/todo/todo.actions';
import { Todo } from './models/todo.model';

@Component({
    selector: 'to-do-app-component',
    templateUrl: './toDoApp.component.html',
    styleUrls: ['./toDoApp.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ToDoAppComponent {

    constructor(private store: Store<{todo: Array<Todo>}>) {}

    toggleAll(): void {

        this.store.dispatch( toggleAll() );

    }

}