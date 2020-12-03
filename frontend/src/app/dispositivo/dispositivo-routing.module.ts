import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivoPage } from './dispositivo.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivoPage
  },
  {
    path: 'sensor',
    loadChildren: () => import('./sensor/sensor.module').then( m => m.SensorPageModule)
  },
  {
    path: 'medicion',
    loadChildren: () => import('./medicion/medicion.module').then( m => m.MedicionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivoPageRoutingModule {}
