import { Secuencial, Par, Primo } from "../modelo/config";

export class CuponFactory {
    createCupon(nombre, json){
      if(nombre === "Números secuenciales") {
        return new Secuencial(json);
      }
      
      if(nombre === "Números pares") {
        return new Par(json);
      }
      
      if(nombre === "Números primos") {
        return new Primo(json);
      }
      
      console.log('Error')
    }
}

