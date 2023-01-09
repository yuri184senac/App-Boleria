import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gerenciamento',
    loadChildren: () => import('./pages/gerenciamento/gerenciamento.module').then( m => m.GerenciamentoPageModule)
  },
  {
    path: 'receita/:id',
    loadChildren: () => import('./pages/receita/receita.module').then( m => m.ReceitaPageModule)
  },
  {
    path: 'cadastrase',
    loadChildren: () => import('./pages/cadastrase/cadastrase.module').then( m => m.CadastrasePageModule)
  }

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
