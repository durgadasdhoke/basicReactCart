import React from 'react'
import Header from './components/Header'
import './components/Card.css'
import Home from './components/Home'
import Cart from './components/Cart'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/cart-context'


const App = () => {

  return (
    <CartContextProvider>
    <Router>
      <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Router>
    </CartContextProvider>
  )
}

export default App
