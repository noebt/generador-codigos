import { ICompleteCoupon } from "../interfaces/interface_complete_coupon"

export class SufixFilling implements ICompleteCoupon{
    sufix: string

    constructor(sufix: string){
        this.sufix = sufix
    }
    
    getCompleteCoupon(codigoGenerado: string): string {
        return codigoGenerado + this.sufix
    }

    getFillingNumber(longitud: number){
        return longitud -  (this.sufix.length)
    }
}