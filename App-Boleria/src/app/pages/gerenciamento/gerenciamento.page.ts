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
      name: "Visualizar",  
      value: 1
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
        break;
      case 1:
        this.crud = 1         
        break;
    }
  }

}
