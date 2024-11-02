import React, { useEffect } from 'react'
import Productdata from './Productdata'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addtocart } from '../slice/cartslice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { setSearchTerm } from '../slice/Productslice'
import Footer from "./Footer"







function ProductPage() {
  const navigate = useNavigate();
  const {products} = useSelector((state)=>state.allproducts)
  const [value , setdata] = useState(Productdata);
  const [search , setsearch] = useState([]);
  const dispatch = useDispatch();
  const filterdata = useSelector((state) => state.allproducts.filterdata);


    const setuser = (item) =>{
      navigate(`/featured/${item.id}`)
      console.log(item)
    }

    const handelsubmit = (e) => {
      e.preventDefault();
       dispatch(setSearchTerm(search));
     
     }
    
    const handelpage = (item) =>{
        const datas = Productdata.filter((product)=>{
            return product.category.name === item;
        })

        setdata(datas);
        console.log(datas)
    }
  
    
    
    
    // useEffect(()=>{
      //   fetch("https://fakestoreapi.com/products")
      //   .then((res)=>res.json())
      //   .then((data)=> setdata(data))
      // },[])
      
      const seeallcategories = () =>{
        setdata(Productdata);
      }
      
      

    const send = (e) =>{
      dispatch(addtocart(e));
      toast.success("item added in your cart")
    }

   

  return (
    <div>
      <div className="container">
        <div className="two-col" style={{display:"flex", gap:"40px" , marginTop:"80px"}}>
            <div className="category" style={{cursor:"pointer"}}>

            <form  onSubmit={handelsubmit}>
         
          <input type="text" placeholder="search products" onChange={(e)=>setsearch(e.target.value)}  />
        
       
         </form>

            <p style={{fontWeight:"bold" , fontSize:"16px"}}>Category</p>
            {/* {
              categories.map((category)=>{
                return(
                  <p key={category} onClick={()=> handelpage(category)}>{category}</p>
                )
              })
            } */}
            <div className="categori">
            <p  onClick={()=> handelpage("Electronics")} style={{ fontSize:"15px"}}>Electronics</p>
            <p onClick={()=> handelpage("Clothes")} style={{ fontSize:"15px"}}>Clothes</p>
            <p  onClick={()=> handelpage("Furniture")} style={{ fontSize:"15px"}}>Furniture</p>
            <p  onClick={()=> handelpage("Shoes")} style={{ fontSize:"15px"}}>Shoes</p>
            <p  onClick={()=> handelpage("Miscellaneous")} style={{ fontSize:"15px"}}>Miscellaneous</p>
            <p  onClick={seeallcategories} style={{ fontSize:"15px"}}>See All</p>
            </div>
            </div>

  
            <div className="product">
            <div className="container flex content  " style={{flexWrap:"wrap"}}>

  {
    filterdata && filterdata.length > 0 ?(
      
        filterdata.map((item) => (
                        <div key={item.id} className="newcard">
                         
                            <img 
                                onClick={() => setuser(item)} 
                                src={item.images[0] } 
                                alt={item.title} 
                            />
                            <p>{item.title}</p>
                            <div className="price" style={{ display: "flex" }}>
                                <p style={{ lineHeight: "0", fontSize: "14px" }}>₹{item.price}.00</p>
                                <p className="rating" style={{ justifyContent: "flex-end" }}><span>4.3</span></p>
                            </div>
                            <button className="featurebutton" onClick={() => send(item)}>Add to Cart</button>
                        </div>
     
    ))
    ):(



      
    
        value.map((item)=>{

          return (

            <>
            <div key={item.id} className="newcard">
            
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
      
                
            
 )
      }
  
  

    </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
