import { CuponFactory } from "../modelo/cupon_factory";

export class EleccionConfiguracion {
    data = require("../config/configuraciones.json");

    //Devuelve una lista con los nombres de la configuración
    listaNombresConfig () {
        var listaNombres: string[] = []
        for (var i = 0; i < this.data.configuraciones.length; ++i){
            listaNombres.push(this.data.configuraciones[i].nombre)
        }
        return listaNombres
    } 

    //Devuelve la lista de códigos dependiendo de la cantidad y configuración seleccionada
    elegirAlgoritmo (config: string, cantidad: number) {
        var listaCodigos = []
        const factory = new CuponFactory();
        const configElegida = factory.createCupon(config, this.data); 
        listaCodigos = configElegida.getListaCodigos(cantidad)
        return listaCodigos
    }
}