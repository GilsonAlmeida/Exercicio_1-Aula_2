import { Component } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'curso-app',
  template: `
    <curso-edit [curso]="editableCurso"
      (save)="save($event)" (clear)="clear()"></curso-edit>
    <curso-list [cursos]="cursos"
      (edit)="edit($event)" (remove)="remove($event)"></curso-list>
  `,
})
export class AppComponent {

  cursos = [];
  editableCurso = {};

  constructor(private cursoService: CursoService) {
    cursoService.errorHandler = error =>
      window.alert('Oops! Deu ruim.');
    this.reload();
  }

  clear() {
    this.editableCurso = {};
  }

  edit(curso) {
    this.editableCurso = Object.assign({}, curso);
  }

  remove(curso) {
    this.cursoService.removeCurso(curso)
      .then(() => this.reload());    
  }

  save(curso) {
    if (curso.id) {
      this.cursoService.updateCurso(curso)
        .then(() => this.reload());
    } else {
      this.cursoService.addCurso(curso)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {
    return this.cursoService.getCursos()
      .then(cursos => this.cursos = cursos);
  }

}
