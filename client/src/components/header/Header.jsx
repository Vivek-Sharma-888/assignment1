import React from 'react'
import './header.css'
import { CartValue } from '../../context/Cart'

const Header = () => {

    const {state:{cart}} = CartValue();

  return (
    <div className='header'>
      <ul className="nav">
        <li className="prod1">
           Cart { cart.reduce((acc,cur)=>acc+cur.qty,0)} 
        </li>
      </ul>
    </div>
  )
}

export default Header
