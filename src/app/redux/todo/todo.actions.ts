import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction('[TODO] Crear', props<{texto: string}>());
export const toggle = createAction('[TODO] Toggle', props<{id: number}>());
export const toggleAll = createAction('[TODO] Toggle all');
export const editar = createAction('[TODO] Editar', props<{id: number, texto: string}>());
export const borrar = createAction('[TODO] Borrar', props<{id: number}>());
export const limpiarCompletados = createAction('[TODO] Limpiar completados');