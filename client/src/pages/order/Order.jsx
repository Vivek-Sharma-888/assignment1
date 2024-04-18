import React from 'react'
import './order.css'
import { CartValue } from '../../context/Cart';

const Order = () => {
  const {state:{cart}} = CartValue();
  console.log(...cart)
  return (
    <div >
    <table className='tableStyle'>
   <tr>
    <th>Product</th>
    <th>Name</th>
    <th>Qty</th>
    <th>Price</th>
    <th>Total</th>
  </tr>
  {
    cart?.map((cartItem)=>{
    return <tr key={cartItem.id}>
      <td><img src={cartItem.image} alt={cartItem.title} width="50"/></td>
      <td>{cartItem.title}</td>
      <td>{cartItem.qty}</td>
      <td>₹ {cartItem.price}</td>
      <td>₹ {cartItem.qty*cartItem.price}</td>
    </tr>

    })
  }
  <tr className='cart-total'>
    <th colSpan={2}>Total Quantity</th>
    <th>{ cart.reduce((acc,cur)=>acc+cur.qty,0)}</th>
    
    <th>Total Amount</th>
    <th>{ cart.reduce((acc,cur)=>acc+(cur.qty*cur.price),0)}</th>
  </tr>
</table>
   
    </div>
  )
}

export default Order
