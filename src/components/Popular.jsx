import React from 'react'
import Productdata from './Productdata';
import { useNavigate } from 'react-router-dom'
import Populardata from './Populardata';

function Popular() {

 


  return (
    <>

    <div className="container flex content  " style={{flexWrap:"wrap"}}>
    {
        Populardata.map((item)=>{
            return(
                <>
                 <div className="newcard" onClick={()=>setuser(item)}> 
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>

                     <div className="price" style={{display:"flex"}}>
                    <p style={{lineHeight:"0",fontSize:"14px"}}>₹{item.price}.00</p>
                    <p className="rating" style={{justifyContent:"flex-end"}}><span>4.3</span></p>
                    </div>
                    

                    <button className="featurebutton" >Coming Soon</button>
                    
                   
                </div>
             
                </>
            )
        })
    }
    </div>
      
    </>
  )
}

export default Popular
