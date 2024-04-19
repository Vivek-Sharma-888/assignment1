
import {commonrequest} from "./Apicall"
import {BASE_URL} from "./helpers"

export const checkoutCoupon = async(data)=>{
    return await commonrequest("POST",`${BASE_URL}/checkout`,data);
}
