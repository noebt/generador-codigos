import { Algorithm } from "./algorithm";
import { CouponAlgorithm } from "../interfaces/interface_coupon_algorithm";
import { ICompleteCoupon, SufixFilling } from "../interfaces/interface_complete_coupon";

export class Secuencial extends Algorithm implements CouponAlgorithm {
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
        var relleno : number = this.getFilling(this.longitud)
        for (var i = 0; i < this.nCupones; ++i){
            numero = String(i)
            numeroCupon = numero.padStart(relleno, "0");
            listaCodigos.push(this.getCompleteCoupon(numeroCupon));
        }
        return listaCodigos
    }
 }