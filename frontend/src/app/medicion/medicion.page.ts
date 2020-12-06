import { Component, OnInit } from '@angular/core';
import { Medicion } from '../model/Medicion';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {
  public mediciones:Array<Medicion>;

  constructor(private router:ActivatedRoute,
              private api:ApiService) { }

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');
    this.api.getMediciones(idDispositivo).then(
      (mediciones) => { this.mediciones = mediciones; }
    )
  }

}
