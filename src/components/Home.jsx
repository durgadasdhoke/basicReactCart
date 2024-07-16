import React, { useContext } from 'react'
import data from '../db.json'
import { CartContext } from '../context/cart-context'
const Home = () => {
  const {addToCart,cartItems} = useContext(CartContext);
  
  return (
    <div className='productList'>
      {data.map((element)=>{
        return(
          <div className="card" key={element.id.toString()} >
            <div className="img">
              <img src={element.image} alt="img" />
            </div>
            <hr />
            <div className="info">
              <div className="title">{element.title}</div>
              <div className="price">${element.price}</div>
              <div className="desc">{element.description}</div>
              <button id={element.id} onClick={()=>addToCart(element.id)}>Add to Cart { cartItems[element.id]> 0 && (<>({cartItems[element.id]})</>)}
              </button>
            </div>
        </div>
        );
      })}
    </div>
  )
}

export default Home
