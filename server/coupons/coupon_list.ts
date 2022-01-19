import { CouponAlgorithm } from "../algorithms/interfaces/interface_coupon_algorithm"

export class CouponList {
    coupon : CouponAlgorithm
    constructor(myCoupon : CouponAlgorithm){
        this.coupon = myCoupon
    }

    getCuponList () : string[] {
        return this.coupon.getListaCodigos()
    }
}