import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/appState.interface';
import { reset } from '../../../redux/contador/contador.actions';

@Component({
    selector: 'nieto-component',
    templateUrl: './nieto.component.html',
    styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

    public contador: number = 0;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        
        this.store.select('contador')
            .subscribe((data: number) => this.contador = data);

    }

    reset(): void {
        
        this.store.dispatch( reset() );

    }

}