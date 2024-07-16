import React, { useContext} from "react";
import "./Cart.css";
import { CartContext } from "../context/cart-context";
import data from "../db.json";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(CartContext);

  let totalAmount = getTotalCartAmount();

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Cart Items :</h1>
      <hr />
      <div className="cartitems">
      {data.map((element) => {
        if (cartItems[element.id] > 0)
          return (
            <>
              <div className="card" key={element.id.toString()}>
                <div className="img">
                  <img src={element.image} alt="img" />
                </div>
                <div className="info">
                  <div className="title">{element.title}</div>
                  <div className="price">${element.price}</div>
                  <button onClick={()=>removeFromCart(element.id)}>Remove From Cart {cartItems[element.id]>0 && (<>({cartItems[element.id]})</>)}</button>
                </div>
              </div>
            </>
          );
        return (<></>);
        })}
        
        </div>
      <hr />
      
      <h2>Total : $ {totalAmount}  <button className="payBtn">Proceed to Payment</button></h2>
    </div>
  );
};

export default Cart;
