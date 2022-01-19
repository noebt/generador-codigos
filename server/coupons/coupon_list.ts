import { ICouponAlgorithm } from "../algorithms/interfaces/interface_coupon_algorithm"

export class CouponList {
    coupon : ICouponAlgorithm
    constructor(myCoupon : ICouponAlgorithm){
        this.coupon = myCoupon
    }

    getCuponList () : string[] {
        return this.coupon.getListaCodigos()
    }
}