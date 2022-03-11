import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/appState.interface';
import * as actions from '../redux/contador/contador.actions';

@Component({
    selector: 'contador-component',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

    public contador: number = 0;

    constructor(private store: Store<AppState>) {
  
      this.contador = 10;
  
    }
  
    ngOnInit(): void {
  
      this.store.select('contador')
          .subscribe(contador => this.contador = contador);
  
    }
  
    incrementar(): void {
  
      this.store.dispatch( actions.incrementar() );
  
    }
  
    decrementar(): void {
  
      this.store.dispatch( actions.decrementar() );
      
    }
  
    setContador( number: number ): void {
  
      this.contador = number;
  
    }

}