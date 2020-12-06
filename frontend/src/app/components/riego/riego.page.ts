import { Component, OnInit } from '@angular/core';
import { Riego } from '../../model/Riego';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-riego',
  templateUrl: './riego.page.html',
  styleUrls: ['./riego.page.scss'],
})
export class RiegoPage implements OnInit {
  public riegos:Array<Riego>;

  constructor(private router:ActivatedRoute,
    private api:ApiService) { }

  ngOnInit() {
    let idElectrovalvula = this.router.snapshot.paramMap.get('id');
    this.api.getRiegos(idElectrovalvula).then(
      (riegos) => { this.riegos = riegos; }
    )
  }

}
