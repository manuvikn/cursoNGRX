import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';

const ROUTES: Routes = [
    
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'contador-module',
        loadChildren: () => import( './contadorModule/contador.module' )
            .then(m => m.ContadorModule)
    },
    {
        path: 'todoapp-module',
        loadChildren: () => import( './toDoAppModule/toDoApp.module' )
            .then(m => m.ToDoAppModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}