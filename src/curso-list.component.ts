import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'curso-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped" border rules = cols>
      <tr>
        <th>Nome</th>
        <th>Duração</th>
        <th>Ações</th>
      </tr>
        <tr *ngFor="let curso of cursos">
          <td class="hidden-xs hidden-sm">{{curso.nome}}</td>
          <td class="hidden-xs hidden-sm">{{curso.duracao}}</td>
          <td>
            <button (click)="onEdit(curso)" class="btn btn-primary">
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="hidden-xs">Alterar</span>
            </button>
            <button (click)="onRemove(curso)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Excluir</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class CursoListComponent {

  @Input() cursos = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(curso) {
    this.edit.emit(curso);
  }

  onRemove(curso) {
    this.remove.emit(curso);
  }

}
