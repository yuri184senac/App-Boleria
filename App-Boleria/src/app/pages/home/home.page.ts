import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/core/models/receita.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  itens: Receita[] = []

  constructor() { }

  ngOnInit() {
  }

  

}
