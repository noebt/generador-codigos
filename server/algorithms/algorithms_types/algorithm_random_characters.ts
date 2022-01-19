import { ICouponAlgorithm } from "../interfaces/interface_coupon_algorithm";
import { Algorithm } from "../algorithm";

export class RandomCharacters extends Algorithm implements ICouponAlgorithm {
    constructor(json: any, numeroCupones: number) {
        super(json.configuraciones[3].nombre, 
          json.configuraciones[3].longitud, 
          numeroCupones);
      }

    getListaCodigos(): string[] {
        var listaCodigos : string[] = []
        for (var i = 0; i < this.nCupones; i++){
            listaCodigos.push(this.getRandomString());
        }
        return listaCodigos
    }

    getRandomString() {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < this.longitud; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
}