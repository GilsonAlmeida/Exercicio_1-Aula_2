import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CursoService {

  errorHandler = error => console.error('CursoService error', error);
  private baseUrl = 'https://curso-bca59.firebaseio.com/';
  private collection = 'cursos';

  constructor(private http: Http) { }

  addCurso(curso) {
    const json = JSON.stringify(curso);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getCursos() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeCurso(curso) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${curso.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateCurso(curso) {
    const json = JSON.stringify({
      nome: curso.nome,
      duracao: curso.duracao
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${curso.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        duracao: parsedResponse[id].duracao
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }

}
