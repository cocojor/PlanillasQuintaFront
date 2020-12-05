import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RolComponent } from './rol/rol.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            title: '',
            icon: '',
            caption: '',
            status: false
        }
    },
    {
        path: 'roles',
        component: RolComponent,
        data: {
            title: '',
            icon: '',
            caption: '',
            status: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
