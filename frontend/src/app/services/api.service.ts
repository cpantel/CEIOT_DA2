import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { Medicion } from '../model/Medicion';

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
    return this._http.get("http://localhost:8080/api/medicion/" + id + "/ultima").toPromise().then(
      (medicion:Medicion) => { 
        return  medicion;
      }
    )
  }

  getMediciones(id):Promise<Array<Medicion>> {
   return this._http.get("http://localhost:8080/api/medicion/" + id + "/todas").toPromise().then(
     (mediciones:Array<Medicion>) => { 
       return  mediciones;
     }
   )  
  }
}