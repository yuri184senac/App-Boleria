import { Component, OnInit } from '@angular/core';
import { Opcao } from 'src/app/core/models/option.models';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.page.html',
  styleUrls: ['./gerenciamento.page.scss'],
})

export class GerenciamentoPage implements OnInit {  
  crud!: number
  option : any = [
    {
      name: "Cadastrar",  
      value: 0 
    },
    {
      name: "Editar",  
      value: 1
    },
    {
      name: "Visualizar/Excluir",    
      value: 2
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  handleChange(ev: any) {
    const value = ev.target.value;
    
    switch(value) {
      case 0:
        this.crud = 0        
        console.log("0")
        break;
      case 1:
        this.crud = 1   
        console.log("1")
        break;
      case 2:
        this.crud = 2
        console.log("2")        
        break;
    }
  }

}
