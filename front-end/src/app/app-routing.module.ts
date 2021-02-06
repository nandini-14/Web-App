import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IsUserGaurd } from './auth/isUser.gaurd';

import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
    ]
  },
  {
    path: 'dashboard',
    component: AppLayoutComponent,
    children: [
      {
        path: 'landing-page',
        loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
        canActivate: [IsUserGaurd],
      }, 

      {
        path: 'user-account',
        loadChildren: () => import('./pages/user-account/user-account.module').then(m => m.UserAccountModule),
        canActivate: [IsUserGaurd],
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
