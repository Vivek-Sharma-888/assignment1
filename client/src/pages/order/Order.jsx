import React,{useEffect, useState} from 'react'
import './order.css'
import { CartValue } from '../../context/Cart';
import {checkoutCoupon} from '../../services/Apis'

const Order = () => {
  const [couponActive,setCouponActive]=useState(false)
  const {state:{cart}} = CartValue();
  const validateCoupon =async()=>{
    const res = await checkoutCoupon({cart});
     if(res.status===200 && res.data.couponCode){
      setCouponActive(true)
     }
   }
  
useEffect(()=>{
   validateCoupon();
},[])

 
  return (<> 
  <table className='tableStyle'>
    <thead>
   <tr>
    <th>Product</th>
    <th>Name</th>
    <th>Qty</th>
    <th>Price</th>
    <th>Total</th>
  </tr>
  </thead>
  {
    cart?.map((cartItem)=>{
    return <tbody key={cartItem.id}>
    <tr >
      <td><img src={cartItem.image} alt={cartItem.title} width="50"/></td>
      <td>{cartItem.title}</td>
      <td>{cartItem.qty}</td>
      <td>₹ {cartItem.price}</td>
      <td>₹ {cartItem.qty*cartItem.price}</td>
    </tr>
    </tbody>
    })
  }
  <tfoot>
  <tr className='cart-total'>
    <th colSpan={2}>Total Quantity</th>
    <th>{ cart.reduce((acc,cur)=>acc+cur.qty,0)}</th>
    
    <th>Total Amount</th>
    <th>{ cart.reduce((acc,cur)=>acc+(cur.qty*cur.price),0)}</th>
  </tr>
   {
    couponActive ? <tr className='cart-discount'>
    <th colSpan={2}>Discount Applied</th>
    <th>10% OFF (-₹{.10*cart.reduce((acc,cur)=>acc+(cur.qty*cur.price),0)})</th>
    <th>Net Payable</th>
    <th>₹ {.90*cart.reduce((acc,cur)=>acc+(cur.qty*cur.price),0)}</th>
  </tr>:<tr className='cart-discount'>
    <th colSpan={3}>Discount Not Applicable</th>
    <th>Net Payable</th>
    <th>₹ {cart.reduce((acc,cur)=>acc+(cur.qty*cur.price),0)}</th>
  </tr>
   } 
  </tfoot>
</table> 
  </>
  )
}

export default Order
