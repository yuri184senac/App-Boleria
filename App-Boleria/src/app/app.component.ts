import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {  //POR ENQUANTO VOU DEIXAR A PÁGINA FOLDER COMO EXEMPLO.
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'heart' }, //na url eu vou por a página que eu criei 
    { title: 'Login', url: '/folder/Login', icon: 'mail' },
    { title: 'Gerenciamento', url: '/folder/Gerenciamento', icon: 'paper-plane' }   
  ];

  constructor() {}
}
