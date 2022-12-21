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

  insertItem(produto: any) {
    return this.http.post(this.API, JSON.stringify(produto), this.httpOptions).subscribe();
  }

  getAllItem() {
    return this.http.get<Receita[]>(this.API);
  }
}
