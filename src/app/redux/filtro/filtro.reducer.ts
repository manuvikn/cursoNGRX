import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export let initialState: string = filtrosValidos.TODOS;

const _filtroReducer = createReducer(initialState,
    on(setFiltro, (_state: string, props: { filtro: filtrosValidos }) => {
        return props.filtro;
    }),
);

export function filtroReducer(state: any, action: Action) {
    return _filtroReducer(state, action);
} 