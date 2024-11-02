import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addtocart, removeitem } from '../slice/cartslice'
import toast from 'react-hot-toast'
import { setcounts } from '../slice/cartslice'
import { decrementone } from '../slice/cartslice'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Contact() {

  const {carts} = useSelector((state)=>state.allcart)
  console.log(carts)
  const {count} = useSelector((state) => state.allcart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalprice , settotalprice] = useState(0);
 
  const setuser = (item) =>{
    navigate(`/featured/${item.id}`)
   
  }

  const total = () =>{
    let totalprice = 0;
    carts.map((ele, index)=>{
      totalprice = ele.qnty * ele.price + totalprice;
      settotalprice(totalprice)
    })
  }

  useEffect(()=>{
    total();
  },[total])

  const decrement = (ele) =>{
    dispatch(removeitem(ele));
    toast.success("item removed from your cart");
  }
 
const increment = (e) =>{
  dispatch(addtocart(e))
}
const decrements = (e) =>{
  dispatch(decrementone(e))
}

  return (
    <div className="container">
      {carts.length > 0 ? 
      
      <div className="full" style={{marginBottom:"80"}}>

        <div className="heading">

        <h1 style={{fontSize:"23px"}}>Shopping Cart <i class="fa-solid fa-cart-shopping"></i></h1>
        </div>

      {
        carts.map((data)=>{
          return (
            <>
              <div className="container">
                <div className="cart">
                  <div className="name" style={{display:"flex"}}>
                  <img src={data.images} alt="" onClick={()=>setuser(data)} />
                  <div className="title" style={{width:"120px"}}>
                  <p style={{fontSize:"14px",color:"black",lineHeight:"1.5"}}>{data.title}</p>
                  <p style={{fontSize:"11px",color:"gray"}}>{data.category.name}</p>
                  <p style={{fontSize:"11px",color:"gray"}}>In Stock</p>
                  <p style={{fontSize:"11px",color:"gray"}}>Product id : {data.category.id}</p>
                  </div>
                  </div>

                  <div className="flexx" style={{display:"flex"}}>

                  <div className="eachprice">
                    <p style={{fontSize:"13px",color:"black",}}>Each</p>
                  <p  style={{fontSize:"15px",color:"black",fontWeight:"bold"}}>₹ {data.price}.00</p>
                  </div>
                  <div className="totalcount">
                  <p style={{fontSize:"13px",color:"black"}}>Quantity</p>
                   <div className="count">
                  <div className="incre" >
                    <button onClick={()=>increment(data)}><i class="fa-solid fa-plus"></i></button>
                  </div>
                  <input type="text" value={data.qnty} />
                  <div className="decre">
                    <button onClick={()=>decrements(data)}><i class="fa-solid fa-minus"></i></button>
                  </div>
                  </div>
                  </div>

              <tfoot style={{display:"flex",marginTop:"7px"}}>
          <tr style={{display:"flex" , width:"100%",justifyContent:"flex-end"}}>
            <th style={{justifyContent:"flex-end", fontSize:"13px",color:"black",lineHeight:"2",fontWeight:"lighter"}}>Total price <br /> <span style={{fontWeight:"bold",fontSize:"16px"}}>₹ {data.qnty * data.price}.00</span> </th>
            </tr> 
        </tfoot>
                  <div className="delete" style={{marginTop:"13px"}}>

                  <i class="fa-solid fa-trash" onClick={()=>decrement(data.id)} style={{cursor:"pointer",color:"red", }}></i>
                  </div>
                  </div>
            
                </div>
              </div>
              
              
            </>
           )
  })
  
}
        
                <tfoot style={{display:"flex",marginTop:"4"}}>
          <tr style={{display:"flex" , width:"100%",justifyContent:"flex-end"}}>
            <th style={{justifyContent:"flex-end", fontSize:"14px",color:"black",lineHeight:"2",fontWeight:"lighter"}}>Total price <br /> <span style={{fontWeight:"bold",fontSize:"16px"}}>₹ {totalprice}.00</span> </th>
            </tr> 
        </tfoot>
      </div>
    : 
    <div className="emptycart">
      <img src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="" />
    </div>
    
  }
 </div>
 
  )
}

export default Contact
