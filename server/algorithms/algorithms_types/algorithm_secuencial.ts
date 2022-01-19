import { Algorithm } from "../algorithm";
import { ICouponAlgorithm } from "../interfaces/interface_coupon_algorithm";
import { SufixFilling } from "../complete_coupon_filling/sufix_filling";

export class Secuencial extends Algorithm implements ICouponAlgorithm {
    constructor(json: any, numeroCupones: number) {
      super(json.configuraciones[0].nombre, 
        json.configuraciones[0].longitud, 
        numeroCupones,
        new SufixFilling(json.configuraciones[0].sufijo));
    }
    
    getListaCodigos () : string[] {
        var listaCodigos = []
        var numero : String
        var numeroCupon : string
        var relleno : number = this.getFilling()
        for (var i = 0; i < this.nCupones; ++i){
            numero = String(i)
            numeroCupon = numero.padStart(relleno, "0");
            listaCodigos.push(this.getCompleteCoupon(numeroCupon));
        }
        return listaCodigos
    }
 }