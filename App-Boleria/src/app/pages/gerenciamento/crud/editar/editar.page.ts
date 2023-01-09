import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/core/models/receita.models';
import { BancoService } from 'src/app/core/services/banco.service';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  routerId = null; 
  receita: any = { };
  constructor(
    private route: ActivatedRoute,
    private db: BancoService, 
    private utility: UtilityService
  ) { }

  ngOnInit() {
    this.routerId = this.route.snapshot.params['id'];
    if(this.routerId) {
      this.db.getItem(this.routerId).subscribe(caixa => {this.receita = caixa}); //a caixa ja é do tipo pro produto por conta da tipagem do método no banco.service
    }
  }

  update(form: any) { //Também posso utilizar a tipagem ngForm em vez de any.
    const item : Receita = this.receita //Criei uma constante para podermos manipular os dados do objeto vindo do banco
    try {
      this.utility.toastando('Atualizado com sucesso!', 'primary', 'top', 5000);
     item.img = form.value.img,
     item.nome = form.value.nome,
     item.ingr = form.value.ingr,
     item.preparo = form.value.preparo
      this.db.updateItem(item); //Já com a variável tipada, vamos passar pro argumento.
    } finally {
      this.utility.carregando(10000, "Redirecionando para a página principal");
      setTimeout(this.refresh, 0)      
    }

  }

  refresh(){
    location.reload()
  }
}
