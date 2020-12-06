import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivoPage } from './dispositivo.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivoPage,
  },
  {
        path: 'sensor',
        loadChildren: () => import('../sensor/sensor.module').then( m => m.SensorPageModule)
      },
      {
        path: 'medicion',
        loadChildren: () => import('../medicion/medicion.module').then( m => m.MedicionPageModule)
      },
      {
        path: 'riego',
        loadChildren: () => import('../riego/riego.module').then( m => m.RiegoPageModule)
      } 
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivoPageRoutingModule {}
