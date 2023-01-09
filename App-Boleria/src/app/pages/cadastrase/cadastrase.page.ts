import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/models/login.models';
import { BancoService } from 'src/app/core/services/banco.service';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-cadastrase',
  templateUrl: './cadastrase.page.html',
  styleUrls: ['./cadastrase.page.scss'],
})
export class CadastrasePage implements OnInit {

  constructor( private db: BancoService, private utility: UtilityService) { }

  ngOnInit() {
  }

  register(form: any) {
    const usuario: Login  = {     
      nome: form.value.nome,
      login: form.value.login,
      senha: form.value.senha,
      perfil: form.value.perfil
    }
    try {
      this.db.insertItem(usuario)
    }
    catch(err) {
      console.log(err)
    }
    finally {
      this.utility.toastando('Cadastrado com sucesso', 'success', 'top', 2000);
    }      
  }
}
