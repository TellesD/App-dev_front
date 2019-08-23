import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'adicionar',
    loadChildren: './adicionar/adicionar.module#AdicionarPageModule'
  },
  { path: 'login',
  loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register',
  loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'favoritos', loadChildren: './favoritos/favoritos.module#FavoritosPageModule' },
  { path: 'day', loadChildren: './day/day.module#DayPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'donate', loadChildren: './donate/donate.module#DonatePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
