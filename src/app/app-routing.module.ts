import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';

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
        component: AdminComponent,
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
