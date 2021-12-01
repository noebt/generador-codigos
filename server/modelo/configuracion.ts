import { ListaSecuenciales, ListaPares, ListaPrimos } from "./codigo"

export interface Configuracion {
    nombre: string;
    longitud: number;
    prefijo: string;
    sufijo: string;
    listaCodigos : any
    getConfig(json : any) : Configuracion;
}

//CLASE NUMEROS SECUENCIALES
export class NumerosSecuenciales implements Configuracion {
    nombre: string
    longitud: number
    prefijo: string
    sufijo: string
    listaCodigos : ListaSecuenciales = new ListaSecuenciales()

    constructor(nombre?: string, longitud?: number, prefijo?: string, sufijo? : string) {
        this.nombre = nombre;
        this.longitud = longitud;
        this.prefijo = prefijo;
        this.sufijo = sufijo;
    }

    getConfig(json : any) : Configuracion {
        var jsonData = json
            var secuenciales = new NumerosSecuenciales(
                jsonData.configuraciones[0].nombre, 
                jsonData.configuraciones[0].longitud, 
                jsonData.configuraciones[0].prefijo,
                jsonData.configuraciones[0].sufijo);
    
        return secuenciales;
    }
}

//CLASE NUMEROS PARES
export class NumerosPares implements Configuracion {
    nombre: string
    longitud: number
    prefijo: string
    sufijo: string
    listaCodigos : ListaPares = new ListaPares()

    constructor(nombre?: string, longitud?: number, prefijo?: string, sufijo? : string) {
        this.nombre = nombre;
        this.longitud = longitud;
        this.prefijo = prefijo;
        this.sufijo = sufijo;
    }

    getConfig(json : any) : Configuracion {
        var jsonData = json
            var pares = new NumerosPares(
                jsonData.configuraciones[1].nombre, 
                jsonData.configuraciones[1].longitud, 
                jsonData.configuraciones[1].prefijo,
                jsonData.configuraciones[1].sufijo);
        return pares;
    }
}

//CLASE NUMEROS PRIMOS
export class NumerosPrimos implements Configuracion {
    nombre: string
    longitud: number
    prefijo: string
    sufijo: string
    listaCodigos : ListaPrimos = new ListaPrimos()

    constructor(nombre?: string, longitud?: number, prefijo?: string, sufijo? : string) {
        this.nombre = nombre;
        this.longitud = longitud;
        this.prefijo = prefijo;
        this.sufijo = sufijo;
    }

    getConfig(json : any) : Configuracion {
        var jsonData = json
            var secuenciales = new NumerosPrimos(
                jsonData.configuraciones[2].nombre, 
                jsonData.configuraciones[2].longitud, 
                jsonData.configuraciones[2].prefijo,
                jsonData.configuraciones[2].sufijo);
        return secuenciales;
    }
}



