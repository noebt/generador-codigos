import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  private data : Observable<string[]>

  constructor(private http : HttpClient) {
    this.data = this.http.get<string[]>('http://localhost:4201');
  }
  
  getData(){
    return this.data
  }

  getCupones (inputNumero : number, seleccion : any, selectedConfig :string) : Observable<any> {
    seleccion = {numero : inputNumero, eleccion : selectedConfig}
    const headers = {"Content-Type" : "application/json"}
    const body = JSON.stringify(seleccion)
    return this.http.post('http://localhost:4201', body ,{'headers':headers})
  }
}

