import React, { useContext, useState } from 'react'
import './sidecart.css'
import UpDown from './UpDown'
import { Cart } from '../context/Cart'

const Sidecart = ({cartItem}) => {

 

  return (
    <div className='wrapper' >
    
    <img src={cartItem.image} alt={cartItem.title} width="50"/>
    <UpDown cartItem={cartItem} />
    <div>
        {cartItem.qty*cartItem.price}
    </div>
    </div>
  )
}

export default Sidecart
