import React, { useEffect, useState } from 'react'
import Productdata from './Productdata'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addtocart } from '../slice/cartslice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

function Featured() {
  const navigate = useNavigate();
  // const [data , setdata] = useState([]);
  const {products} = useSelector((state)=>state.allproducts)
  const dispatch = useDispatch();

  const setuser = (item) =>{
    navigate(`/featured/${item.id}`)
    console.log(item)
  }

  // useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products")
  //   .then((res)=>res.json())
  //   .then((data)=> setdata(data))
  // },[])


  const send = (e) =>{
    dispatch(addtocart(e));
    toast.success("item added in your cart")
  }

  return (
    <>
    <div className="container flex content  " style={{flexWrap:"wrap"}}>
    {
        products.map((item)=>{
            return(
                <>
                 <div  className="newcard">
                  
                    <img onClick={()=>setuser(item)} src={item.images[0]} alt=""  />
                    <p>{item.title}</p>
                    
                    <div className="price" style={{display:"flex"}}>
                    <p style={{lineHeight:"0",fontSize:"14px"}}>₹{item.price}.00</p>
                    <p className="rating" style={{justifyContent:"flex-end"}}><span>4.3</span></p>
                    </div>
                    

                    <button className="featurebutton" onClick={()=>send(item)}>Add to Cart</button>
                    
                   
                </div>
             
                </>
            )
        })
    }
    </div>
      
    </>
  )
}

export default Featured
