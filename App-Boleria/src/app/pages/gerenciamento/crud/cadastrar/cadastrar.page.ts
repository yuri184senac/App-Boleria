import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/core/models/receita.models';
import { BancoService } from 'src/app/core/services/banco.service';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  constructor(
    private db: BancoService,
    private utility: UtilityService,
    
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
    try {
      this.db.insertItem(item)
    }
    catch(err) {
      console.log(err)
    }
    finally {
      this.utility.toastando('Cadastrado com sucesso', 'success', 'top', 2000);
      setTimeout(this.refresh, 2000)
    }      
  }

  refresh(){
    location.reload()
  }
}
