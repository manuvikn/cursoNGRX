import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/toDoAppModule/models/todo.model';
import { crearTodo, toggle } from './todo.actions';
 
export const initialState: Array<Todo> = [
  new Todo( 'Salvar al mundo' ),
  new Todo( 'Vencer a Thanos' ),
  new Todo( 'Robar escudo a capitán América' ),
  new Todo( 'Comprar traje Stark' ),
];
 
const _todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {

    return state.map(item => {

      if (item.id !== id) return item;
      return {
        ...item,
        completado: !item.completado
      };

    });

  })
);
 
export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}