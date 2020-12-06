import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dispositivo',
    loadChildren: () => import('./components/dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'dispositivo/:id',
    loadChildren: () => import('./components/dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },  
  {
    path: '',
    redirectTo: 'dispositivo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
