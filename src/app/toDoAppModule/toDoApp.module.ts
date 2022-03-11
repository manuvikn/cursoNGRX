import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoAddComponent } from './components/todo-add/todo-add.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ToDoAppComponent } from './toDoApp.component';
import { ToDoAppRoutingModule } from './toDoApp.routing.module';

@NgModule({
    imports: [
        CommonModule,
        ToDoAppRoutingModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        ToDoAppComponent,
        ToDoAddComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoListComponent
    ],
    providers: []
})
export class ToDoAppModule {}