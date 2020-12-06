import { Component } from '@angular/core';

import {Dispositivo} from '../model/Dispositivo';

import  { ApiService} from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dispositivos:Dispositivo[];

  constructor(public api:ApiService) {
    api.getDispositivos().then(lst=>{
      this.dispositivos=lst;
    })

    
  }

}
