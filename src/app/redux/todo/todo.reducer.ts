import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/toDoAppModule/models/todo.model';
import { crearTodo } from './todo.actions';
 
export const initialState: Array<Todo> = [];
 
const _todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
);
 
export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}