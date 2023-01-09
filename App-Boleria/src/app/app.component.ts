import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {  //POR ENQUANTO VOU DEIXAR A PÁGINA FOLDER COMO EXEMPLO.
  public appPages = [
    { title: 'Home', url: '/home', icon: 'heart' }, //na url eu vou por a página que eu criei 
    { title: 'Login', url: '/login', icon: 'mail' },
    { title: 'Gerenciamento', url: '/gerenciamento', icon: 'paper-plane' }
  ];

  constructor() {}
}
