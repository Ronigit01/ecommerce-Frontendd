import React from 'react'
import Productdata from './Productdata'

function NewAdd() {
  return (
    <>
    <div className="container flex content  " style={{flexWrap:"wrap"}}>
    {
        Productdata.map((item)=>{
            return(
                <>
                 <div className="newcard">
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <p style={{lineHeight:"0",fontSize:"11px",color:"rgba(169,6,157,255)"}}>{item.price}</p>
                </div>
             
                </>
            )
        })
    }
    </div>
      
    </>
  )
}

export default NewAdd
