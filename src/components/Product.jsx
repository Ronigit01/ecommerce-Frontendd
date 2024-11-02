import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Product({props}) {


  return (
    <>
      <div className="container">
       
       <div className="all">
        <div className="feature">
        <NavLink className="featurename" to="popular">Popular</NavLink>
        <NavLink className="featurename" to="featured">Featured</NavLink>
        <NavLink className="featurename" to="newadded">New added</NavLink>
        </div>
        
        <div className="viewbutton">
        <p>View more <i class="fa-solid fa-angles-right"></i></p>
        </div>
        </div>
        <Outlet/>
      </div>
  


    </>
  )
}

export default Product
