import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiegoPageRoutingModule } from './riego-routing.module';

import { RiegoPage } from './riego.page';
import { PipesModule } from './../../pipes/pipes.module';
import { HighlightDirective } from './../../directives/highlight.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiegoPageRoutingModule,
    PipesModule
  ],
  declarations: [RiegoPage,HighlightDirective]
})
export class RiegoPageModule {}
