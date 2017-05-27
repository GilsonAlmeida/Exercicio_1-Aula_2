import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'curso-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">
        <input type="text" [(ngModel)]="curso.nome"
          placeholder="Nome" style="width: 25%;">
        <input type="text" [(ngModel)]="curso.duracao"
          placeholder="Duração" style="width: 50%;">
        <button (click)="onSave()" class="btn btn-primary">
          <span class="glyphicon glyphicon-ok"></span>
          <span class="hidden-xs">Salvar</span>
        </button>
        <button (click)="onClear()" class="btn btn-warning">
          <span class="glyphicon glyphicon-remove"></span>
          <span class="hidden-xs">Limpar</span>
        </button>
      </div>
    </div>
  `,
})
export class CursoEditComponent {

  @Input() curso = {};
  @Output() clear = new EventEmitter();
  @Output() save = new EventEmitter();

  onClear() {
    this.clear.emit();
  }

  onSave() {
    this.save.emit(this.curso);
  }

}
