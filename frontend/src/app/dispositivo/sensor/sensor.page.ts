import { Component, OnInit } from '@angular/core';
import { Medicion } from '../../model/Medicion';
import { ActivatedRoute } from '@angular/router';

import { MedicionService } from '../../services/medicion.service';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {
  public mediciones:Array<Medicion>;

  constructor(private router:ActivatedRoute,
              private ms:MedicionService) { }

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');
    this.ms.getMediciones(idDispositivo).then(
      (mediciones) => { this.mediciones = mediciones; }
    )
  }

}
