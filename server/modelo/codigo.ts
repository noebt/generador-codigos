export interface Codigo {
    nombre: string;
    longitud: number;
    prefijo: string;
    sufijo: string;
}

export function parseListaCodigos (json) {
    var jsonData = json
    var listaCodigos: Codigo[] = []
    for (var i = 0; i < jsonData.configuraciones.length; i++) {
        listaCodigos.push(jsonData.configuraciones[i])
    }   
    return listaCodigos;
} 