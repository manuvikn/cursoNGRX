import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/appState.interface';
import { dividir, multiplicar } from '../../../redux/contador/contador.actions';

@Component({
    selector: 'hijo-component',
    templateUrl: './hijo.component.html',
    styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

    public contador: number = 0;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {

        this.store.select('contador')
            .subscribe((data: number) => this.contador = data);

    }

    multiplicar(): void {

        this.store.dispatch( multiplicar({numero: 4}) );
    
    }

    dividir(): void {

        this.store.dispatch( dividir({numero: 2}) );
        
    }

}