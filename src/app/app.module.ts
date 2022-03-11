import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home-component/home.component';
import { counterReducer } from './redux/contador/contador.reducer';
import { todoReducer } from './redux/todo/todo.reducer';
import { NavbarComponent } from './shared/navbar-component/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: counterReducer,
                          todo: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
