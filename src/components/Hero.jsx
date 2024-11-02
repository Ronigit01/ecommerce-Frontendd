import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

  const navigate = useNavigate();

  const goshop = () =>{
    navigate("/product")
  }


  return (
    <div>
       <div className="container">

        <div className="hero">

          <div className="hero-heading">
            <p>Trade in-offer</p>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>save more with coupon & upto 70% off</p>
            <button onClick={()=>goshop()}>Shop Now</button>
          </div>

          <div className="image-container">
            <img src="./images/hero.jpg" alt="" />
          </div>



        </div>
</div>
    </div>
  )
}


export default Hero
