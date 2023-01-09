import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receita } from 'src/app/core/models/receita.models';
import { BancoService } from 'src/app/core/services/banco.service';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {
  itens: Receita[] = [] 
  constructor( private db: BancoService, private router: Router, private utility: UtilityService) { }

  ngOnInit() {
    this.db.getAllItem().subscribe(result => {this.itens = result});
  }

  deletarItem(id: any) {
    try{
      this.db.deleteItem(id);
      console.log(id)  
      //this.carregando(5000,"Deletando item...");            
    }catch(err) {
      console.log(err);
    }finally {
       this.utility.toastando('Item deletado','danger', 'bottom',  2000, );
      // setTimeout(this.refresh, 2000);      
    }
    
  }

  editarItem(id: any) {
    console.log(id)
    // this.router.navigate(['/gerenciamento/'+id]);
  }


}
