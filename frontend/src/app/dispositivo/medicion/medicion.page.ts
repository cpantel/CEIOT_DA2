import { Component, OnInit } from '@angular/core';
import { Medicion } from '../../model/Medicion';
import { ActivatedRoute } from '@angular/router';

import { MedicionService } from '../../services/medicion.service';


@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {
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