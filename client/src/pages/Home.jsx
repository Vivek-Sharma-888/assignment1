import React, { useContext } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import './home.css'
import Sidecart from '../components/Sidecart'
import { Cart } from '../context/Cart'



const Home = () => {
    
     const {state:{cart},products} = useContext(Cart)
  return (
    <div>
      <Header />
      <div className='product-cart'>
      <div className='productContainer'>
      {
       products?.map((item)=>{
        return <ProductCard key={item.id} item={item} />
       })
      }
      </div>
      <div className='sidecartContainer'>
      {
        products.length>0 && cart?.map((cartItem)=>{
        return (
            <Sidecart key={cartItem.id} cartItem={cartItem} />
        )
       })
      }
      <button className='checkout-button' type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div> 
      </div>
      
     
    </div>
  )
}

export default Home
