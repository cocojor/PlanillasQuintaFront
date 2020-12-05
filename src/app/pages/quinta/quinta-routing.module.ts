import { GenerarComponent } from './generar/generar.component';
import { CargarComponent } from './cargar/cargar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargar',
    pathMatch: 'full'
  },
  {
    path: 'cargar',
    component: CargarComponent,
    data: {
      idPermisoPadre: 2,
      idPermiso: 3,
      title: 'Cargar Planilla Quinta',
      icon: 'icon-layout-sidebat-left',
      caption: '',
      status: true
    }
  },
  {
    path: 'generar',
    component: GenerarComponent,
    data: {
      idPermisoPadre: 2,
      idPermiso: 4,
      title: 'Cargar Planilla Quinta',
      icon: 'icon-layout-sidebat-left',
      caption: '',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuintaRoutingModule { }
