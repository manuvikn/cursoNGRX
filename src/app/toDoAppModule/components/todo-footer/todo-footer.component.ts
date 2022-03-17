import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos, setFiltro } from 'src/app/redux/filtro/filtro.actions';
import { limpiarCompletados } from 'src/app/redux/todo/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtro: string = filtrosValidos.TODOS;
  filtros: Array<filtrosValidos> = [];
  pendientes: number = 0;
  showLimpiarButton: boolean = true;

  constructor(private store: Store<{filtro: string, todo: Array<Todo>}>) { }

  ngOnInit(): void {

    this.filtros = Object.values(filtrosValidos);
    
    this.store
        .subscribe(({filtro, todo}) => {
          this.filtro = filtro;

          this.pendientes = todo.filter(({completado}) => !completado).length;
          this.showLimpiarButton = this.pendientes !== todo.length;
        });

  }

  classSelected(item: string): boolean {

    return this.filtro === item;

  }

  changeFiltro(item: filtrosValidos, event: Event): void {

    event.preventDefault();
    this.store.dispatch( setFiltro({filtro: item}) )

  }

  limpiarCompletados(): void {

    this.store.dispatch(limpiarCompletados());

  }

}
