import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  data = this.http.get<string[]>('http://localhost:4201');
  
  constructor(private http : HttpClient) {
   }

   public async enviarDatos() {
    this.seleccion = {numero : this.inputNumero, eleccion : this.selectedConfig}
    this.http.post<any>('http://localhost:4201', JSON.stringify(this.seleccion), {
      headers: {
        "Content-Type" : "application/json"
      },
    }).subscribe(
      datos => {this.listaCupones = datos},
      error => console.log("ERROR: " + error));
  }
}

