import React from 'react'
import Header from '../../components/header/Header'
import ProductCard from '../../components/productcard/ProductCard'
import './home.css'
import Sidecart from '../../components/sidecart/Sidecart'
import { CartValue } from '../../context/Cart'
import {Link} from 'react-router-dom'




const Home = () => {
    
     const {state:{cart},products} = CartValue();

  return (
    <div>
      <Header />
      <div className='product-cart'>
      <div className='productContainer'>
      {
       products.length>0 && products?.map((item)=>{
        return <ProductCard key={item.id} item={item} />
       })
      }
      </div>
      <div className='sidecartContainer'>
      {
        cart?.map((cartItem)=>{
        return (
            <Sidecart key={cartItem.id} cartItem={cartItem} />
        )
       })
      }
      {/* <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>TOTAL</div>
        <div>TOTAL</div>
        <div>TOTAL</div>
      </div> */}
       <Link to="/order">
      <button className='checkout-button' type="button" disabled={cart.length === 0}>
          Proceed to Checkout
      </button>
      </Link> 
      </div> 
      </div>
      
     
    </div>
  )
}

export default Home
