import { Par } from "../algorithms/algorithms_types/algorithm_par";
import { Primo } from "../algorithms/algorithms_types/algorithm_primo";
import { RandomCharacters } from "../algorithms/algorithms_types/algorithm_random_characters";
import { Secuencial } from "../algorithms/algorithms_types/algorithm_secuencial";
import { ICouponAlgorithm } from "../algorithms/interfaces/interface_coupon_algorithm";


interface CuponFactoryMethod {
    createCupon(nombre : string, json : unknown, number: number) : ICouponAlgorithm
}

export class CuponFactory implements CuponFactoryMethod {
    createCupon(nombre: string, json : unknown, number: number) : ICouponAlgorithm {
      if(nombre === "Números secuenciales") {
        return new Secuencial(json, number);
      }
      
      if(nombre === "Números pares") {
        return new Par(json, number);
      }
      
      if(nombre === "Números primos") {
        return new Primo(json, number);
      }

      if(nombre === "Números primos") {
        return new Primo(json, number);
      }

      if(nombre === "Carácteres aleatorios") {
        return new RandomCharacters(json, number);
      }

      console.log('Error')
    }
}


