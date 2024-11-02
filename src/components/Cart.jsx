import React from 'react'
import { useSelector } from 'react-redux'


function Cart() {

    const {carts} = useSelector((state)=>state.allproducts)
    

  return (
    <div>
      <div className="container">
        <h1>{carts.title}</h1>
        <img src={carts.image} alt="" />
      </div>
    </div>
  )
}

export default Cart
