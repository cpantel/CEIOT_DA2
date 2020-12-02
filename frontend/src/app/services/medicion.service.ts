import { Injectable } from '@angular/core';
import { Medicion } from '../model/Medicion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MedicionService {

  listado:Array<Medicion> = new Array<Medicion>();
  
  constructor(private _http:HttpClient) {

  }

  getUltimaMedicion(id):Promise<Medicion> {
    return this._http.get("http://localhost:8080/api/medicion/" + id + "/ultima").toPromise().then(
      (medicion:Medicion) => { 
        return  medicion[0];
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