import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { Urls } from './rutas/rutas';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { LoaderComponent } from '../app/shared/loader/loader.component';
import { LoaderService } from '../app/services/loader.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from '../app/interceptors/loader.interceptor';
import { UserIdleModule } from 'angular-user-idle';

import { RenderService } from '../app/services/render.service';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        AuthComponent,
        BreadcrumbsComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        NgxPaginationModule,
        HttpClientModule,
        UserIdleModule.forRoot({idle: 300, timeout: 1, ping: 120})
    ],
    providers: [
        MenuItems,
        RenderService,
        Urls,
        LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
