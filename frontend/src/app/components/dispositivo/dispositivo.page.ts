import { Component } from '@angular/core';

import {Dispositivo} from '../../model/Dispositivo';

import  { ApiService} from '../../services/api.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: 'dispositivo.page.html',
  styleUrls: ['dispositivo.page.scss'],
})
export class DispositivoPage {
  dispositivos:Dispositivo[];

  constructor(public api:ApiService) {
    api.getDispositivos().then(lst=>{
      this.dispositivos=lst;
    })

    
  }

}
