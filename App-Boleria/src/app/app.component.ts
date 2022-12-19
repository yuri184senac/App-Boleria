import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {  //POR ENQUANTO VOU DEIXAR A PÁGINA FOLDER COMO EXEMPLO.
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'heart' }, //na url eu vou por a página que eu criei 
    { title: 'Login', url: '/folder/Login', icon: 'mail' },
    { title: 'Cadastro', url: '/folder/Cadastro', icon: 'paper-plane' }   
  ];

  constructor() {}
}
