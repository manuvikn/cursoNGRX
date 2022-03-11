import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoAppComponent } from './toDoApp.component';

const ROUTES: Routes = [
 
    { path: '', component: ToDoAppComponent }

];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ToDoAppRoutingModule {}