import { Configuracion, NumerosPares, NumerosPrimos, NumerosSecuenciales } from "./configuracion"

export interface Codigo {
    listaCodigos : string []
    getListaCodigos(configuracion: Configuracion, cantidad: number) : string[];
}

//GENERADOR LISTA SECUENCIALES
export class ListaSecuenciales implements Codigo {
    listaCodigos: string[] = []

    getListaCodigos (cupon: Configuracion, cantidad: number) : string[] {
        this.listaCodigos = []
        var numeroCupon : String
        var elemento : string
        var relleno : number = cupon.longitud - (cupon.prefijo.length) - (cupon.sufijo.length)
        for (var i = 0; i < cantidad; ++i){
            numeroCupon = String(i)
            elemento = numeroCupon.padStart(relleno, "0");
            this.listaCodigos.push(cupon.prefijo + elemento + cupon.sufijo);
        }
        return this.listaCodigos
        }
    
}

//GENERADOR LISTA PARES
export class ListaPares implements Codigo {
    listaCodigos: string[] = []

    getListaCodigos (cupon: Configuracion, cantidad: number) : string[] {
        this.listaCodigos = []
        var numeroCupon : String
        var elemento : string
        var relleno : number = cupon.longitud - (cupon.prefijo.length) - (cupon.sufijo.length)
        for (var i = 0; i < cantidad; i++){
            if (i % 2 == 0){
                numeroCupon = String(i)
                elemento = numeroCupon.padStart(relleno, "0");
                this.listaCodigos.push(cupon.prefijo + elemento + cupon.sufijo);
            }else {
                cantidad ++
            }    
        }
        return this.listaCodigos
        }
}

//GENERADOR LISTA PRIMOS
export class ListaPrimos implements Codigo {
    listaCodigos: string[] = []

    getListaCodigos (cupon: Configuracion, cantidad: number) : string[] {
        this.listaCodigos = []
        var numeroCupon : String
        var elemento : string
        var relleno : number = cupon.longitud - (cupon.prefijo.length) - (cupon.sufijo.length)
        for (var i = 0; i < cantidad; ++i){
            if (this.esPrimo(i)){
                numeroCupon = String(i)
                elemento = numeroCupon.padStart(relleno, "0");
                this.listaCodigos.push(cupon.prefijo + elemento + cupon.sufijo);
            }else
                cantidad++
        }
        return this.listaCodigos
    }
    
    esPrimo(numero: number)  {
        for(var i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
            if(numero % i === 0) return false;
            return numero > 1;
    }
}

