import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../redux/filtro/filtro.actions';
import { Todo } from '../toDoAppModule/models/todo.model';

@Pipe({name: 'filtro'})
export class FiltroPipe implements PipeTransform {
    
    transform(value: Array<Todo>, tipo: filtrosValidos): Array<Todo> {
        
        switch(tipo) {

            case filtrosValidos.COMPLETADOS:
                return value.filter(({completado}) => completado);
                break;
            case filtrosValidos.TODOS:
                return value;
                break;
            case filtrosValidos.PENDIENTES:
                return value.filter(({completado}) => !completado);
                break;
            default:
                return value;

        }
        
    }
}