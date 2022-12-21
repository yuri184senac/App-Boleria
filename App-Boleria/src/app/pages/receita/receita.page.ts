import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from 'src/app/core/models/receita.models';
import { BancoService } from 'src/app/core/services/banco.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {
  routerId = null;
  produto: any = { };
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private db: BancoService,
  ) { }

  ngOnInit() {
     
    this.routerId = this.route.snapshot.params['id'];

    if(this.routerId) {
      this.db.getItem(this.routerId).subscribe(caixa => {this.produto = caixa}); //a caixa ja é do tipo pro produto por conta da tipagem do método no banco.service
    } 
  }

}
