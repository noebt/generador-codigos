export interface ICompleteCoupon {
    getFillingNumber(longitud: number) : number;
    getCompleteCoupon(codigoGenerado : string) : string;
}

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

