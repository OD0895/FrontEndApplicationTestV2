import { AuthGuard } from './_guards/auth.guard';
import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'todo-list',
        canActivate: [AuthGuard],
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
      },
      {
        canActivate: [AuthGuard],
        path: 'application-test',
        loadChildren: () => import('./applicationtest/applicationtest.module').then(m => m.ApplicationtestModule)
      }
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
