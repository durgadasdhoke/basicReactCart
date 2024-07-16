import { createContext,useState } from 'react';
import data from '../db.json'

export const CartContext = createContext(null);    

const getInitialCartValue = ()=>{
    let cart = {};
    for(let i=1;i<data.length;i++){
        cart[i]=0;
    }
    return cart;
}

export const CartContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState(getInitialCartValue);

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let getInfo = data.find((e)=>e.id === Number(item));
                totalAmount+=cartItems[item]*getInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));  
    };
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));  
    };

    const contextValue = {cartItems,addToCart,removeFromCart,getTotalCartAmount};

    return<CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}