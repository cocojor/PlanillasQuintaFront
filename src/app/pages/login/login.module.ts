import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RolComponent } from './rol/rol.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule
    ],
    declarations: [LoginComponent, RolComponent]
})
export class LoginModule { }
