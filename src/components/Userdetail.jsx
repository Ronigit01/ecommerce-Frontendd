import React, { useDebugValue, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {addtocart} from "../slice/cartslice"
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Footer from './Footer';
import {setcounts} from "../slice/cartslice"



function Userdetail() {
  
  const {id} = useParams();
  const {products} = useSelector((state)=> state.allproducts)
  const dispatch = useDispatch();
  const [ product , setproduct] = useState(null);
  const [images , setimages] = useState("");

  const {count} = useSelector((state)=>state.allcart)

  
  useEffect(()=>{
    const newproduct = products.find((product)=>product.id.toString() === id)
    setproduct(newproduct);

    if(newproduct && newproduct.images.length >0) {
      setimages(newproduct.images[0])
    }

    console.log(product)
  },[id,products])
  
  const decrement = (e) => {
    dispatch(setcounts(e))
  }
  const increment = (e) => {
    dispatch(setcounts(e))
  }


  if (!product) {
    return <div>Loading...</div>; // Show loading state or not found message
  }
  
  const send = (e) => {
    dispatch(addtocart(e));
    toast.success("item added in your cart");
  }
  console.log(product.images[0])


  return (
    <>
    <div className="container" style={{display:"flex", justifyContent:"space-between",gap:"100px" , minHeight:"70vh"}}> 
  
    <div className="image">

    <div className="row">
    <img src={images} alt="" />
    </div>
    
    
    <div className="col">
    {
      
  
    product.images.map((imgs,index)=>{
      
      return (
        <>
          <img src={imgs} alt="" onClick={() => setimages(imgs)}/>
          
        </>

      )
    })
  }
    </div>

   </div> 
   <div className="info">
   
   <p style={{ fontSize:"28px",lineHeight:"0"}}>{product.title}</p>

   <a className="star">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i> <span>(customer reviews)</span>
    </a >

   {/* <h1>{product.category}</h1> */}
   <p style={{color:"rgba(169,6,157,255)",fontWeight:"bold"}} className="deal">Deal of the Day : ₹ {product.price}.00</p>

   <p style={{ fontSize:"15px"}}>{product.description}</p>

   <div className="free" style={{color:"gray"}}>
    
   <div className="delivery" >
   <i class="fa-solid fa-truck"></i>
   <p>Free Delivery</p>
   </div>
   <div className="delivery">
   <i class="fa-solid fa-person-walking-arrow-loop-left"></i>
   <p>30 Days Replacement</p>
   </div>
   <div className="delivery">
   <i class="fa-solid fa-truck"></i>
   <p>Gurrenty Delivery</p>
   </div>
   <div className="delivery">
   <i class="fa-solid fa-circle-check"></i>
   <p>2 Years warranty</p>
   </div>

   </div>
   <div className="line"></div>

   <p style={{color:"gray" , fontSize:"14px", lineHeight:"1.5", marginTop:"20px"} }>Available : <span style={{color:"black"}}>In Stock</span></p>
   <p style={{color:"gray" , fontSize:"14px", lineHeight:"1.5", marginTop:"20px"}} >updatedAt : <span style={{color:"black"}}>{product.updatedAt}</span></p>
   <p style={{color:"gray" , fontSize:"14px", lineHeight:"1.5", marginTop:"20px"}}>Category : <span style={{color:"black"}}>{product.category.name}</span></p>

  

   <button className="button" onClick={()=>send(product)}>Add to cart</button>
   </div>
      
    </div>
    <Footer />
    </>
  )
}

export default Userdetail