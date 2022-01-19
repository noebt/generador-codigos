import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioService } from './servicio/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  inputNumero : number
  seleccion : undefined
  selectedConfig : string 
  listaCupones : undefined
  data : Observable<string[]>
  
  constructor(private service: ServicioService) {
    this.inputNumero = 0
    this.selectedConfig = ""
    this.data = service.getData()
  }

  setListaCupones (lista : undefined){
    this.listaCupones = lista
  }

   public enviarDatos() {
     this.service.getCupones(this.inputNumero, this.seleccion, this.selectedConfig).subscribe(
       data => this.setListaCupones(data)
     )
  }
}

