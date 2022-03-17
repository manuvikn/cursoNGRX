import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  navigateTo( route?: string ): void {

    switch(route) {

      case 'contador':
        this.router.navigate(['contador-module']);
        break;
      
      default:
        break;

    }

  }

}
