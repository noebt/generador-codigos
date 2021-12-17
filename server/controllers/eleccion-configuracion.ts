import { CuponFactory } from "../modelo/cupon_factory";

var data = require("../config/configuraciones.json");

//Devuelve una lista con los nombres de la configuración
export function listaNombresConfig () {
    var listaNombres: string[] = []
    for (var i = 0; i < data.configuraciones.length; ++i){
        listaNombres.push(data.configuraciones[i].nombre)
    }
    return listaNombres
} 

//Devuelve la lista de códigos dependiendo de la cantidad y configuración seleccionada
export function elegirAlgoritmo (config: string, cantidad: number) {
    var listaCodigos = []
    const factory = new CuponFactory();
    const configElegida = factory.createCupon(config, data); 
    listaCodigos = configElegida.getListaCodigos(cantidad)
    return listaCodigos
}
