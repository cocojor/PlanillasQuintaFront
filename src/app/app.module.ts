import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderService } from './services/loader.service';
import { MenuItems } from './shared/menu-items/menu-items';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './shared/loader/loader.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { UserIdleModule } from 'angular-user-idle';
import { AuthComponent } from './layout/auth/auth.component';
import { RenderService } from './services/render.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoaderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    UserIdleModule
  ],
  providers: [
    MenuItems,
    RenderService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
