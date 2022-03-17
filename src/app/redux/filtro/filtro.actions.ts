import { createAction, props } from '@ngrx/store';

export enum filtrosValidos {

    COMPLETADOS = 'completados', TODOS = 'todos', PENDIENTES = 'pendientes'

}



export const setFiltro = createAction('[Filtro] Set filtro', props<{filtro: filtrosValidos}>());