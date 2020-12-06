import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DispositivoPage } from './dispositivo.page';

import { DispositivoPageRoutingModule } from './dispositivo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivoPageRoutingModule
  ],
  declarations: [DispositivoPage]
})
export class DispositivoPageModule {}
