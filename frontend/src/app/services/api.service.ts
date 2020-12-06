import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { Medicion }    from '../model/Medicion';
import { Riego }       from '../model/Riego';
import { Electrovalvula }  from '../model/Electrovalvula';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private _http:HttpClient) {

  }

  getDispositivos():Promise<Array<Dispositivo>> {
   return this._http.get("http://localhost:8080/api/dispositivo/").toPromise().then(
     (dispositivos:Array<Dispositivo>) => { 
        return  dispositivos
      }

   )
 }

 getDispositivo(id):Promise<Dispositivo> {
    return this._http.get("http://localhost:8080/api/dispositivo/" + id).toPromise().then(
      (dispositivo:Dispositivo) => { 
        return  dispositivo[0];
      }
    )
  }


  getUltimaMedicion(id):Promise<Medicion> {
    return this._http.get("http://localhost:8080/api/dispositivo/" + id + "/medicion/ultima").toPromise().then(
      (medicion:Medicion) => { 
        return  medicion[0];
      }
    )
  }

  getMediciones(id):Promise<Array<Medicion>> {
   return this._http.get("http://localhost:8080/api/dispositivo/" + id + "/medicion" ).toPromise().then(
     (mediciones:Array<Medicion>) => { 
       return  mediciones;
     }
   )  
  }

  getRiegos(id):Promise<Array<Riego>> {
    return this._http.get("http://localhost:8080/api/dispositivo/" + id + "/riego").toPromise().then(
      (riegos:Array<Riego>) => { 
        return  riegos;
      }
    )  
   }

   getElectrovalvula(id):Promise<Electrovalvula> {
    return this._http.get("http://localhost:8080/api/dispositivo/" + id + "/electrovalvula").toPromise().then(
      (electrovalvula:Electrovalvula) => { 
        return  electrovalvula;
      }
    )  
   }

}