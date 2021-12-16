abstract class Config {
    nombre: string
    longitud: number
    prefijo: string
    sufijo: string
    
    constructor(nombre, longitud, prefijo, sufijo) {
      this.nombre = nombre;
      this.longitud = longitud;
      this.prefijo = prefijo;
      this.sufijo = sufijo;
    }

    abstract getListaCodigos(number: number) : string[]
}

export class Secuencial extends Config{
    constructor(json: any) {
      super(json.configuraciones[0].nombre, 
        json.configuraciones[0].longitud, 
        json.configuraciones[0].prefijo, 
        json.configuraciones[0].sufijo);
    }

    getListaCodigos (cantidad: number) : string[] {
        var listaCodigos = []
        var numeroCupon : String
        var elemento : string
        var relleno : number = this.longitud - (this.prefijo.length) - (this.sufijo.length)
        for (var i = 0; i < cantidad; ++i){
            numeroCupon = String(i)
            elemento = numeroCupon.padStart(relleno, "0");
            listaCodigos.push(this.prefijo + elemento + this.sufijo);
        }
        return listaCodigos
    }
 }

export class Par extends Config{
    constructor(json: any) {
      super(json.configuraciones[1].nombre, 
        json.configuraciones[1].longitud, 
        json.configuraciones[1].prefijo, 
        json.configuraciones[1].sufijo);
    }

    getListaCodigos (cantidad: number) : string[] {
        var listaCodigos = []
        var numeroCupon : String
        var elemento : string
        var relleno : number = this.longitud - (this.prefijo.length) - (this.sufijo.length)
        for (var i = 0; i < cantidad; i++){
            if (i % 2 == 0){
                numeroCupon = String(i)
                elemento = numeroCupon.padStart(relleno, "0");
                listaCodigos.push(this.prefijo + elemento + this.sufijo);
            }else {
                cantidad ++
            }    
        }
        return listaCodigos
    }
 }

 export class Primo extends Config{
    constructor(json: any) {
      super(json.configuraciones[2].nombre, 
        json.configuraciones[2].longitud, 
        json.configuraciones[2].prefijo, 
        json.configuraciones[2].sufijo);
    }

    getListaCodigos (cantidad: number) : string[] {
        var listaCodigos = []
        var numeroCupon : String
        var elemento : string
        var relleno : number = this.longitud - (this.prefijo.length) - (this.sufijo.length)
        for (var i = 0; i < cantidad; ++i){
            if (this.esPrimo(i)){
                numeroCupon = String(i)
                elemento = numeroCupon.padStart(relleno, "0");
                listaCodigos.push(this.prefijo + elemento + this.sufijo);
            }else
                cantidad++
        }
        return listaCodigos
    }

    esPrimo(numero: number)  {
        for(var i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
            if(numero % i === 0) return false;
            return numero > 1;
    }
 }


  