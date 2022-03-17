import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { crearTodo } from 'src/app/redux/todo/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'todoadd-component',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ToDoAddComponent implements OnInit {

    todoForm!: FormGroup;

    constructor(private fb: FormBuilder,
                private store: Store<{todo: Todo[]}>) {}

    ngOnInit(): void {
        
        this.todoForm = this.fb.group({
            todoInput: this.fb.control('', Validators.required)
        });

    }

    submitTodoForm(_e: Event): void {

        const inputValue: string = this.todoForm.get('todoInput')?.value;
        this.store.dispatch( crearTodo({texto: inputValue}) );

        this.todoForm.reset();
    }

}