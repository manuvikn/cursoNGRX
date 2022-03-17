import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HijoComponent } from './components/hijo/hijo.component';
import { NietoComponent } from './components/nieto/nieto.component';
import { ContadorComponent } from './contador.component';
import { ContadorRoutingModule } from './contador.routing.module';

@NgModule({
    declarations: [
        ContadorComponent,
        HijoComponent,
        NietoComponent
    ],
    imports: [
        CommonModule,
        ContadorRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class ContadorModule { }