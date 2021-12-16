import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServicioService } from './servicio/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public inputNumero : any
  public seleccion : any
  public selectedConfig : any
  public listaCupones : any
  public data : any
  
  constructor(private service: ServicioService, private http : HttpClient) {
    this.data = service.data
  }

   public enviarDatos() {
     this.service.getCupones(this.inputNumero, this.seleccion, this.selectedConfig).subscribe(
       data => this.listaCupones = data
     )
  }
}

