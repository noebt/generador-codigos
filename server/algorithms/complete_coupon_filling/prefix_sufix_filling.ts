import { ICompleteCoupon } from "../interfaces/interface_complete_coupon"

export class PrefixAndSufixFilling implements ICompleteCoupon {
    sufix: string
    prefix: string

    constructor (sufix: string, prefix: string) {
        this.sufix = sufix
        this.prefix = prefix
    }

    getCompleteCoupon(codigoGenerado: string): string {
        return this.prefix + codigoGenerado + this.sufix
    }

    getFillingNumber(longitud: number){
        return longitud - (this.prefix.length) - (this.sufix.length)
    }
}