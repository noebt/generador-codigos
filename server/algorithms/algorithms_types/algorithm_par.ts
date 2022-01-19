import { Algorithm } from "./algorithm";
import { CouponAlgorithm } from "../interfaces/interface_coupon_algorithm";
import { SufixFilling } from "../interfaces/interface_complete_coupon";

export class Par extends Algorithm implements CouponAlgorithm{
    constructor(json: any, numeroCupones: number) {
      super(json.configuraciones[1].nombre, 
        json.configuraciones[1].longitud, 
        numeroCupones,
        new SufixFilling(json.configuraciones[1].sufijo));
    }

    getListaCodigos () : string[] {
        var listaCodigos = []
        var numero : string
        var numeroCupon : string
        var relleno : number = this.getFilling(this.longitud)
        for (var i = 0; i < this.nCupones; i++){
            if (i % 2 == 0){
                numero = String(i)
                numeroCupon = numero.padStart(relleno, "0");
                listaCodigos.push(this.getCompleteCoupon(numeroCupon));
            }else {
                this.nCupones ++
            }    
        }
        return listaCodigos
    }
 }