import { createContext, useReducer, useState,useEffect } from "react";
import { cartReducer } from "../reducer/CartReducer";
import axios from 'axios'
import { ProductUrl } from '../assets/Constant';

const Cart = createContext();

const CartProvider =({children})=>{

    const [products,SetProducts] = useState([])
    const getProducts =async()=>{
     const res = await axios.get(ProductUrl)
       SetProducts(res.data)
    }
    useEffect(()=>{
     getProducts();
    },[])

    const initialstate ={
        cart:[]
    } ;
    const [state,dispatch] = useReducer(cartReducer,initialstate) ;

    return (
        <Cart.Provider value={{products,state,dispatch}}>
         {
            children
         }
        </Cart.Provider>
    )
}

export {Cart,CartProvider}