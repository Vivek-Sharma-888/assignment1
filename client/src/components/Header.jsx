import React, { useContext } from 'react'
import './header.css'
import { Cart } from '../context/Cart'

const Header = () => {

    const {state:{cart}} = useContext(Cart)

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
