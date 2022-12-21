import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BancoService } from 'src/app/core/services/banco.service';

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
    private db: BancoService 
  ) { }

  ngOnInit() {
    this.routerId = this.route.snapshot.params['id'];
    if(this.routerId) {
      this.db.getItem(this.routerId).subscribe(caixa => {this.receita = caixa}); //a caixa ja é do tipo pro produto por conta da tipagem do método no banco.service
    }
  }

}
