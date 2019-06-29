import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from 'src/app/models/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  selectedNota: Nota;
  notas: Nota[]
  readonly URL_API = 'http://localhost:3000/api/notas'

  constructor(private http:HttpClient) { 
    this.selectedNota = new Nota();
  }

  getNotas(){
    return this.http.get(this.URL_API);
  }

  getNota(nota: Nota){
    return this.http.get(this.URL_API + `/${nota._id}`)
  }

  postNota(nota: Nota){
    return this.http.post(this.URL_API, nota)
  }

  putNota(nota: Nota){
    return this.http.put(this.URL_API + `/${nota._id}`, nota);
  }

  deleteNota(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
