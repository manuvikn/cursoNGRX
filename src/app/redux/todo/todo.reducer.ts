import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/toDoAppModule/models/todo.model';
import { borrar, crearTodo, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';
 
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

  }),
  on(editar, (state, { id, texto }) => {

    return state.map(item => {

      if (item.id !== id) return item;
      return {
        ...item,
        texto
      };

    });

  }),
  on(borrar, (state, {id}) => {

    return state.filter( item => item.id !== id );

  }),
  on(toggleAll, state => {

    const completado: boolean = !state.every(({completado}) => completado);
    return state.map( item => ({...item, completado}) );

  }),
  on(limpiarCompletados, state => {

    return state.filter(({completado}) => !completado);

  })
);
 
export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}