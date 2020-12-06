import { Injectable } from '@angular/core';
import { Riego } from '../model/Riego';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RiegoService {

  listado:Array<Riego> = new Array<Riego>();
  
  constructor(private _http:HttpClient) {

  }


  getRiegos(id):Promise<Array<Riego>> {
   return this._http.get("http://localhost:8080/api/riego/" + id ).toPromise().then(
     (riegos:Array<Riego>) => { 
       return  riegos;
     }
   )
 }
}