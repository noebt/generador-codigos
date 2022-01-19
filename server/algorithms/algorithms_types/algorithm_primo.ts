import { Algorithm } from "./algorithm";
import { CouponAlgorithm } from "../interfaces/interface_coupon_algorithm";
import { PrefixAndSufixFilling } from "../interfaces/interface_complete_coupon"

export class Primo extends Algorithm implements CouponAlgorithm {
    constructor(json: any, numeroCupones: number) {
      super(json.configuraciones[2].nombre, 
        json.configuraciones[2].longitud, 
        numeroCupones,
        new PrefixAndSufixFilling(json.configuraciones[2].sufijo, json.configuraciones[2].prefijo));
    }

    getListaCodigos () : string[] {
        var listaCodigos = []
        var numero : String
        var numeroCupon : string
        var relleno : number = this.getFilling(this.longitud)
        for (var i = 0; i < this.nCupones; ++i){
            if (this.esPrimo(i)){
                numero = String(i)
                numeroCupon = numero.padStart(relleno, "0");
                listaCodigos.push(this.getCompleteCoupon(numeroCupon));
            }else
                this.nCupones++
        }
        return listaCodigos
    }

    esPrimo(numero: number)  {
        for(var i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
            if(numero % i === 0) return false;
            return numero > 1;
    }
 }


