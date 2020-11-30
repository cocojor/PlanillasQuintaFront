import { PrincipalComponent } from './layout/principal/principal.component';
import { AuthComponent } from './layout/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
      }
    ]
  },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        redirectTo: 'quinta',
        pathMatch: 'full'
      },
      {
        path: 'quinta',
        loadChildren: './pages/quinta/quinta.module#QuintaModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
