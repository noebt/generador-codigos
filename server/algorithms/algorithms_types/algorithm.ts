import { ICompleteCoupon } from "../interfaces/interface_complete_coupon"

export abstract class Algorithm {
    longitud: number
    nombre: string
    nCupones: number
    filling: ICompleteCoupon
    
    constructor(nombre: string, longitud: number, nCupones: number, filling?: ICompleteCoupon) {
      this.nombre = nombre
      this.longitud = longitud
      this.nCupones = nCupones
      this.filling = filling
    }

    getFilling(longitud: number): number {
        return this.filling.getFillingNumber(longitud)
    }

    getCompleteCoupon (codigoGenerado: string) {
        return this.filling.getCompleteCoupon(codigoGenerado)
    }
}