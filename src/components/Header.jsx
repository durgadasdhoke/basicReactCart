import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Das'sShop</h1>
      </div>
      <div className="links">
        <Link style={{color:'white',textDecoration:'none'}} to="/">Home</Link>
        <Link style={{color:'white',textDecoration:'none'}} to="/cart">Cart</Link>
      </div>
    </div>
  )
}

export default Header
