import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './providers/auth.service';

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
    loadChildren: () => import('./painel/cadastrar-empresa/cadastrar-empresa.module').then( m => m.CadastrarEmpresaPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'painel/confirmar-empresa',
    loadChildren: () => import('./painel/confirmar-empresa/confirmar-empresa.module').then( m => m.ConfirmarEmpresaPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'painel/dashboard',
    loadChildren: () => import('./painel/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'painel/minha-empresa/:key',
    loadChildren: () => import('./painel/my-company/my-company.module').then( m => m.MyCompanyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
