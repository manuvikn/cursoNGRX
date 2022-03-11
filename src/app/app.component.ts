import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './components/contador/contador.actions';
import { AppState } from './interfaces/appState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux-app';

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
