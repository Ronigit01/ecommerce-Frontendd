import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Product from './Product'
import { Outlet } from 'react-router-dom'
import Populardata from './Populardata'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setproducts } from '../slice/Productslice'
import Productdata from './Productdata'
import Footer from './Footer'

function Home() {

  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.allproducts)
  useEffect(()=>{
    dispatch(setproducts(Productdata));
    console.log(products)
  })


  return (
    <div>
    <Hero />
    <Category />
    <Product />
    < Footer />
    </div>
  )
}

export default Home
