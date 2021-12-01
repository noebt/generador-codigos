import { NumerosPares, NumerosPrimos, NumerosSecuenciales } from "../modelo/configuracion";

export class EleccionConfiguracion {
    data = require("../config/configuraciones.json");
    listaConfiguraciones = this.getListaConfigs(this.data);
    listaCodigos : string[] = []

    //Devuelve una lista con los nombres de la configuración
    listaNombresConfig () {
        var listaNombres: string[] = []
        for (var i = 0; i < this.listaConfiguraciones.length; ++i){
            listaNombres.push(this.listaConfiguraciones[i].nombre)
        }
        return listaNombres
    } 

    //Devuelve la lista de configuraciones del fichero .json
    getListaConfigs (json : any) {
        var listaConfiguraciones: any [] = []
    
        var secuencial: NumerosSecuenciales = new NumerosSecuenciales();
        var primos: NumerosPrimos = new NumerosPrimos();
        var pares: NumerosPares = new NumerosPares();
    
        listaConfiguraciones.push(secuencial.getConfig(json))
        listaConfiguraciones.push(pares.getConfig(json))
        listaConfiguraciones.push(primos.getConfig(json))
    
        return listaConfiguraciones;
    }

    //Devuelve la configuración elegida por el usuario
    getConfigElegida (config: string) {
        for (var i = 0; i < this.listaConfiguraciones.length; ++i){
            if (this.listaConfiguraciones[i].nombre === config){
                return this.listaConfiguraciones[i]
            }
        }
    }

    //Devuelve la lista de códigos dependiendo de la cantidad y configuración seleccionada
    elegirAlgoritmo (config: string, cantidad: number) {
        this.listaCodigos = []
        var configuracionElegida = this.getConfigElegida(config)
        for (var i = 0; i < this.listaConfiguraciones.length; ++i){        
            if (this.listaConfiguraciones[i].nombre == config){
                this.listaCodigos = this.listaConfiguraciones[i].listaCodigos.getListaCodigos(configuracionElegida, cantidad)
            }
        }
        return this.listaCodigos
    }
}