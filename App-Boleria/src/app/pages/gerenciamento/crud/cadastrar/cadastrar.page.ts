import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/core/models/receita.models';
import { BancoService } from 'src/app/core/services/banco.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  constructor(
    private db: BancoService
  ) { }

  ngOnInit() {
  }

  register(form: any) {
    const item  = {     
      nome: form.value.nome,
      img: form.value.img,
      ingr: form.value.ingr,
      preparo: form.value.preparo
    }
    console.log(item)
    this.db.insertItem(item)
  }
}
