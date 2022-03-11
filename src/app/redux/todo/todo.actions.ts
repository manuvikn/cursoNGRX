import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction('[TODO] Crear', props<{texto: string}>());