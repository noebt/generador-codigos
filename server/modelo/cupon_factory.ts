import { Secuencial, Par, Primo } from "../modelo/config";

interface CuponFactoryMethod {
    createCupon(nombre : string, json : any) : any
}

export class CuponFactory implements CuponFactoryMethod {
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

