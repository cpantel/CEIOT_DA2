import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/Dispositivo';
import { Medicion } from '../model/Medicion';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo:Dispositivo;
  public mediciones:Array<Medicion>;
  constructor(private router:ActivatedRoute,
              private api:ApiService) { }

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');
    this.api.getDispositivo(idDispositivo).then(
      dispositivo => { this.dispositivo = dispositivo
        this.api.getMediciones(idDispositivo).then(
          (mediciones) => { this.mediciones = mediciones; }
        )
      }  
    )
  }

}
