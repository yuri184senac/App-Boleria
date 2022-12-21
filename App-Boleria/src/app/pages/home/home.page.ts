import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/core/models/receita.models';
import { BancoService } from 'src/app/core/services/banco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  itens: Receita[] = [] //Esse obj itens será usado como dataBind na pag home.html

  constructor(
    private db: BancoService
  ){}

  ngOnInit() {
    //Arqui vamos carregar todas receitas salvas no banco de dados 
    this.db.getAllItem().subscribe(result => {this.itens = result});
  }



}
