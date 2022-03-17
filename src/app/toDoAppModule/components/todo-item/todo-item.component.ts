import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { borrar, editar, toggle } from 'src/app/redux/todo/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') inputFisico: ElementRef;

  public todoForm!: FormGroup;
  public editando: boolean;

  constructor(private fb: FormBuilder,
              private store: Store) { }

  ngOnInit(): void {
    
    this.todoForm = this.fb.group({

      completado: this.fb.control(this.todo.completado),
      texto: this.fb.control(this.todo.texto, Validators.required)

    });

    this.todoForm.get('completado')?.valueChanges
    .subscribe(_data => {
      this.store.dispatch( toggle({id: this.todo.id}) );
      
    });

  }

  editar(): void {

    this.editando = true;
    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    });

  }

  terminarEdicion(): void {

    this.editando = false;
    if (this.todoForm.get('texto')?.invalid) return;

    const textoValue: string = this.todoForm.get('texto')?.value;

    this.store.dispatch( editar({ id: this.todo.id, texto: textoValue }) );
  }

  borrar(): void {

    this.store.dispatch( borrar({id: this.todo.id}) );

  }

}
