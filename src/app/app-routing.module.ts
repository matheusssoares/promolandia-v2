import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'option-navigation',
    pathMatch: 'full'
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'option-navigation',
    loadChildren: () => import('./option-navigation/option-navigation.module').then( m => m.OptionNavigationPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'painel/login',
    loadChildren: () => import('./painel/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'painel/criar-conta',
    loadChildren: () => import('./painel/criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },
  {
    path: 'painel/cadastrar-empresa',
    loadChildren: () => import('./painel/cadastrar-empresa/cadastrar-empresa.module').then( m => m.CadastrarEmpresaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
