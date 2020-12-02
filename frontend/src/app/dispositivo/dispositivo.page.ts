import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/Dispositivo';
import { Medicion } from '../model/Medicion';
import { DispositivoService } from '../services/dispositivo.service';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo:Dispositivo;
  public mediciones:Array<Medicion>;
  constructor(private router:ActivatedRoute,
              private ds:DispositivoService,
              private ms:MedicionService) { }

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');
    this.ds.getDispositivo(idDispositivo).then(
      dispositivo => { this.dispositivo = dispositivo
        this.ms.getMediciones(idDispositivo).then(
          (mediciones) => { this.mediciones = mediciones; }
        )
      }  
    )
  }

}
