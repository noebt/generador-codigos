export interface ICompleteCoupon {
    getFillingNumber(longitud: number) : number;
    getCompleteCoupon(codigoGenerado : string) : string;
}