import { Action, createReducer, on } from '@ngrx/store';
import { decrementar, dividir, incrementar, multiplicar, reset } from './contador.actions';

export const initialState = 20;
 
const _counterReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, {numero}) => state * numero),
  on(dividir, (state, {numero}) => state / numero),
  on(reset, (_state) => 0)
);
 
export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}