import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receita } from '../models/receita.models';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  readonly API = "http://localhost:3000/receitas/"

  constructor(private http: HttpClient) { }

  insertItem(receita: any) {
    return this.http.post(this.API, JSON.stringify(receita), this.httpOptions).subscribe();
  }

  getAllItem() {
    return this.http.get<Receita[]>(this.API);
  }

  getItem(id: Number) {
    return this.http.get<Receita>(this.API + id)
  }

  updateItem(receita: Receita) {
    return this.http.put(this.API + receita.id, JSON.stringify(receita), this.httpOptions).subscribe();
  }

  deleteItem(id: number) {
    return this.http.delete(this.API + id).subscribe()
  }


}
