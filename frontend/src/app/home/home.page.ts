import { Component } from '@angular/core';

import {Dispositivo} from '../model/Dispositivo';

import  { DispositivoService} from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dispositivos:Dispositivo[];

  constructor(public ds:DispositivoService) {
    ds.getDispositivos().then(lst=>{
      this.dispositivos=lst;
    })

    
  }

}