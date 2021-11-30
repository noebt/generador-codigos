import { parseListaCodigos, Codigo } from "../modelo/codigo"

const data = require("../config/configuraciones.json");
var listaConfig = parseListaCodigos(data);
var listaCodigos : string[] = [] 

function generadorSecuenciales(cupon: Codigo, cantidad: number){
    var elemento: string
    var numero: string
    var relleno : number = cupon.longitud - (cupon.prefijo.length) - (cupon.sufijo.length)
    for (var i = 0; i < cantidad; ++i){
        numero = String(i)
        elemento = numero.padStart(relleno, "0");
        listaCodigos.push(cupon.prefijo + elemento + cupon.sufijo);
    }
    return listaCodigos
}

function generadorPares(cupon: Codigo, cantidad: number){
    var elemento: string
    var numero: string
    var relleno : number = cupon.longitud - (cupon.prefijo.length) - (cupon.sufijo.length)
    for (var i = 0; i < cantidad; i++){
        if (i % 2 == 0){
            numero = String(i)
            elemento = numero.padStart(relleno, "0");
            listaCodigos.push(cupon.prefijo + elemento + cupon.sufijo);
        }else {
            cantidad ++
        }    
    }
    return listaCodigos
}

function generadorPrimos(cupon: Codigo, cantidad: number){
    var elemento: string
    var numero: string
    var relleno : number = cupon.longitud - (cupon.prefijo.length) - (cupon.sufijo.length)
    for (var i = 0; i < cantidad; ++i){
        if (esPrimo(i)){
            numero = String(i)
            elemento = numero.padStart(relleno, "0");
            listaCodigos.push(cupon.prefijo + elemento + cupon.sufijo);
        }else
            cantidad++
    }
    return listaCodigos
}

function esPrimo(numero: number) {
    for(var i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
        return numero > 1;
}

export function getConfig (config: string) {
    for (var i = 0; i < listaConfig.length; ++i){
        if (listaConfig[i].nombre === config){
            return listaConfig[i]
        }
    }
}

export function elegirAlgoritmo (config: string, cantidad: number) {
    listaCodigos = []
    switch(getConfig(config).nombre){
        case listaNombresConfig()[0] : return generadorSecuenciales(getConfig(config), cantidad)
        case listaNombresConfig()[1] : return generadorPares(getConfig(config), cantidad)
        case listaNombresConfig()[2] : return generadorPrimos(getConfig(config), cantidad)
    }
}

export function listaNombresConfig () {
    var listaNombres: string[] = []
    for (var i = 0; i < listaConfig.length; ++i){
        listaNombres.push(listaConfig[i].nombre)
    }
    return listaNombres
}
