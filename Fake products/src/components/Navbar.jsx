// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cartItem=useSelector((state)=>state.cart)
  return (
    <nav>
        <ul>
            <li><Link to="/">redux-store</Link></li>
            <li><Link to="/">home</Link></li>
            <li><Link to="/cart">cart <sup>{cartItem.length}</sup></Link></li>
        </ul>
    </nav>
  )
}


export default Navbar