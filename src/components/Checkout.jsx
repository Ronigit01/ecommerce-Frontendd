import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';  
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Checkout() {

  const [bliingtoggle , setbliingtoggle ] = useState(true);
  const [bliintoggle , setbliintoggle ] = useState(true);
  const [payment , setpayment ] = useState(true);
  const [totalprice , settotalprice] = useState(0);
  const {carts} = useSelector((state)=>state.allcart);
  const navigate = useNavigate();

  
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


  return (
    <>
    <div className="container ">
      
      
      <h1 style={{fontSize:"20px", width:"100%",alignItems:"center",display:"flex",justifyContent:"flex-start",marginBlock:"28px",color:"green"}}>Shopping Cart <i class="fa-solid fa-cart-shopping fa-beat" style={{color: "green",marginLeft:"10px",fontSize:"16px"}}></i></h1>
     
      <div className="full flex" style={{marginBottom:"80"}}>

            <div className="allcartt" style={{display:"flex",flexDirection:"column",width:"90%",gap:"30px"}}>
             <div className="check">
                <div className="checkout" style={{width:"100%"}}>
                   <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>setbliingtoggle(!bliingtoggle)}>
                       <p>Billing Information</p>
                       { bliingtoggle  ? <i class="fa-solid fa-angle-down"></i> :<i class="fa-solid fa-angle-up"></i> }
                   </div>


                  <div className={`${bliingtoggle ? "" : "hidden"}`}>
                   <div >
                      <div className="label">
                          <label pmlFor="" >Name</label>
                          <input type="text"  style={{width:"96%"}} required/>
                       </div>
                   </div>
                   <div>
                      <div>
                          <label htmlFor="">Email</label>
                          <input type="email" style={{width:"96%"}}/>
                       </div>
                   </div>
                   <div>
                      <div>
                          <label htmlFor="">Phone</label>
                          <input type="number" style={{width:"96%"}}/>
                       </div>
                   </div>
                   </div>
                  
                   
                </div>
             
              </div>
            
          {/* ///address ///  */}

             <div className="check">
                <div className="checkout" style={{width:"100%"}}>
                   <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>setbliintoggle(!bliintoggle)}>
                       <p>Shipping Address</p>
                       { bliintoggle  ? <i class="fa-solid fa-angle-down"></i> :<i class="fa-solid fa-angle-up"></i> }
                   </div>


                  <div className={`${bliintoggle ? "" : "hidden"}`}>
                   <div >
                      <div className="label">
                          <label pmlFor="">Address</label>
                          <input type="text"  style={{width:"96%"}}/>
                       </div>
                   </div>
                   <div>
                      <div>
                          <label htmlFor="">City</label>
                          <input type="text" style={{width:"96%"}}/>
                       </div>
                   </div>
                   <div>
                      <div>
                          <label htmlFor="">Zip Code</label>
                          <input type="number" style={{width:"96%"}}/>
                       </div>
                   </div>
                   </div>
                  
                   
                </div>
             
          
              </div>

              {/* ///payment/// */}
              <div className="check">
                <div className="checkout" style={{width:"100%"}}>
                   <div style={{display:"flex",justifyContent:"space-between"}} onClick={()=>setpayment(!payment)}>
                       <p>Payment Method</p>
                       { payment  ? <i class="fa-solid fa-angle-down"></i> :<i class="fa-solid fa-angle-up"></i> }
                   </div>


                  <div className={`${payment ? "" : "hidden"}`}>
                   <div >
                      <div className="label" style={{display:"flex",flexDirection:"row",alignItems:"center",}}>
                       <input type="radio"/>
                          <label pmlFor="">Cash on delivery</label>
                          
                       </div>
                   </div>
                   
                  
                   </div>
                  
                   
                </div>
             
          
              </div>


              </div>
             
                
        
            {/* /////////////// cart box /////////// */}
           
              <div className="carttotal" style={{width:"50%"}}>
              <p style={{fontSize:"13px",color:"black",fontWeight:"bold"}}>CART TOTAL</p>
              <div className="flex" style={{fontSize:"15px",color:"gray",justifyContent:"space-between"}}> 
                <p>Total Items : </p>
                <p style={{color:"black"}} >{carts.length}</p>
              </div>
              <div style={{fontSize:"13px",backgroundColor:"#eeee",height:"0.5px"}}></div>
              <p style={{fontSize:"14px",color:"black",marginBlock:"22px"}}>Shipping</p>
              <p style={{fontSize:"12px"}}>Kolkata, West Bengal</p>
              <div style={{fontSize:"13px",backgroundColor:"#eeee",height:"0.5px",marginTop:"10px"}}></div>


              <div className="flex" style={{fontSize:"15px",color:"black",marginBlock:"8px", justifyContent:"space-between"}}>
                <p >Total Price : </p>
                <p> ₹{totalprice}</p>
              </div>

              <button className="featurebutton" style={{width:"100%",backgroundColor:"#20a300",color:"white",borderRadius:"4px",paddingBlock: "8px", marginTop: "14px"}} onClick={()=>navigate("/done")}>Place Order</button>
              </div>

      
              </div>
              
 </div>
 
 </>
  )
}

export default Checkout
