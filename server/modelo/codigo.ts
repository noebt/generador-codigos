export interface Codigo {
    nombre: string;
    longitud: number;
    prefijo: string;
    sufijo: string;
}

export function parseListaCodigos (json) {
    var jsonData = json
    console.log("RAW: "+ JSON.stringify(jsonData.configuraciones))
    var listaCodigos: Codigo[] = []
    for (var i = 0; i < jsonData.configuraciones.length; i++) {
        listaCodigos.push(jsonData.configuraciones[i])
        console.log("ELEMENTO: "+ JSON.stringify(listaCodigos[i]))
    }   
    console.log(listaCodigos)
    return listaCodigos;
} 