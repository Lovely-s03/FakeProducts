// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import {remove} from "../redux/cartSlice"
const Cart = () => {
  const cartItem=useSelector((state)=>state.cart)
  console.log(cartItem);
  if(cartItem.length===0){
    return <h1>cart is empty🤷‍♀️</h1>
  }
  else{
  return (
       <section id="productWrapper">
        {
          cartItem.map((item)=>{
            return(
              <Card key={item.id} item={item} btnText="remove" feature={remove}/>
            )
          })   }
       </section>
    
  )
}
}

export default Cart