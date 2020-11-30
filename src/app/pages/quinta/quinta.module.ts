import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuintaRoutingModule } from './quinta-routing.module';
import { CargarComponent } from './cargar/cargar.component';
import { GenerarComponent } from './generar/generar.component';

@NgModule({
  imports: [
    CommonModule,
    QuintaRoutingModule
  ],
  declarations: [CargarComponent, GenerarComponent]
})
export class QuintaModule { }
