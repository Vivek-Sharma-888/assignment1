import React from 'react'
import './updown.css'
import { CartValue } from '../../context/Cart'

const UpDown = ({cartItem}) => {
   
   const {dispatch} = CartValue();
  return (
    <div className='updown'>
    <div>
    <button onClick={()=>dispatch({type:"CHANGE_QTY",payload:{id:cartItem.id,qty:--cartItem.qty}})}>
          ➖
      </button>
    </div>
      
      <div>
       {cartItem.qty}
      </div>
      <div>
      <button onClick={()=>dispatch({type:"CHANGE_QTY",payload:{id:cartItem.id,qty:++cartItem.qty}})}>
          ➕
      </button>
      </div>
       
    </div>
  )
}

export default UpDown
