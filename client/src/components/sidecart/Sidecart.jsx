import React from 'react'
import './sidecart.css'
import UpDown from '../updown/UpDown'


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
