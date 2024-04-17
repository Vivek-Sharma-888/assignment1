import React from "react";
import './productcard.css';
import { useContext } from "react";
import { Cart } from "../context/Cart";

const ProductCard = ({ item }) => {
    const {state:{cart},dispatch} = useContext(Cart)
  return (
    <div className="products" key={item.id}>
      <img src={item.image} alt={item.title} className="img" />
      <div className="title-price">
       <span>{item.title.slice(0,10)}</span>
        <span>₹ {item.price}</span>
      </div>
      {
       
            cart.some((p) => p.id === item.id)?<button
        className="add remove"
        onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})}
      >
        Remove Item
      </button>
      : <button className="add" onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})} >
        Add Item
      </button>
      }
      

     
    </div>
  );
};

export default ProductCard;
