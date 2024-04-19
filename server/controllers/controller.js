voucher_codes = require('voucher-code-generator');
var orders =[];
var voucher =[];


exports.checkoutController=async(req,res)=>{
  
    const {cart} = req.body ;
    orders.push(cart);
    
    // console.log(orders,orders.length);
  try {
    
    if (orders.length % 3 == 0) {
       const couponCode = voucher_codes.generate({
            length: 8,
            count: 1
        });
        discountCode ={couponCode,discount:"10%"}
        voucher.push(discountCode)
        // console.log(voucher);
        res.status(200).json(discountCode)
    } else {
        res.status(200).json("Not Applicable") 
    }
    
} catch (error) {
    res.status(500).json(error.message)
}

}

exports.lists=async(req,res)=>{

}