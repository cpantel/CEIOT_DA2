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
  private url="http://backend:8080/api/dispositivo/";

  constructor(private _http:HttpClient) {

  }

  getDispositivos():Promise<Array<Dispositivo>> {
   return this._http.get(this.url).toPromise().then(
     (dispositivos:Array<Dispositivo>) => { 
        return  dispositivos
      }
   )
 }

 getDispositivo(id):Promise<Dispositivo> {
    return this._http.get(this.url + id).toPromise().then(
      (dispositivo:Dispositivo) => { 
        return  dispositivo[0];
      }
    )
  }

  getUltimaMedicion(id):Promise<Medicion> {
    return this._http.get(this.url + id + "/medicion/ultima").toPromise().then(
      (medicion:Medicion) => { 
        return  medicion[0];
      }
    )
  }

  getMediciones(id):Promise<Array<Medicion>> {
   return this._http.get(this.url + id + "/medicion" ).toPromise().then(
     (mediciones:Array<Medicion>) => { 
       return  mediciones;
     }
   )  
  }

  getRiegos(id):Promise<Array<Riego>> {
    return this._http.get(this.url + id + "/riego").toPromise().then(
      (riegos:Array<Riego>) => { 
        return  riegos;
      }
    )  
   }

   getElectrovalvula(id):Promise<Electrovalvula> {
    return this._http.get(this.url + id + "/electrovalvula").toPromise().then(
      (electrovalvula:Electrovalvula) => { 
        return  electrovalvula;
      }
    )  
   }

   changeElectrovalvula(id:number,e:boolean):Promise<boolean> {
    console.log("changeElectrovalvula");
    return this._http.post(this.url + id + "/electrovalvula",{apertura:e}).toPromise().then(
      (electrovalvula:Electrovalvula) => { 
        console.log(electrovalvula);
        return  electrovalvula.apertura;
      }
    )       
   }
}