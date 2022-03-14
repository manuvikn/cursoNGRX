import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador.component';

const ROUTES: Routes = [

    { path: '', component: ContadorComponent }

];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ContadorRoutingModule {}