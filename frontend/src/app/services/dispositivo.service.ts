import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DispositivoService {

  listado:Array<Dispositivo> = new Array<Dispositivo>();
  
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
  
}