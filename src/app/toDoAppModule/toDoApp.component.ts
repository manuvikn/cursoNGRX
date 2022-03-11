import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'to-do-app-component',
    templateUrl: './toDoApp.component.html',
    styleUrls: ['./toDoApp.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ToDoAppComponent {

    constructor() {}

}