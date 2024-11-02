import React from 'react'
import Productdata from './Productdata'

function Viewcard() {

    const [value , setdata] = useState(Productdata);


    const setuser = (item) =>{
        navigate(`/featured/${item.id}`)
        console.log(item)
      }
  

      const send = (e) =>{
        dispatch(addtocart(e));
        toast.success("item added in your cart")
      }

  return (
    <div>
         <div className="container  content  " style={{flexWrap:"wrap"}}>
      <div key={item.id} className="newcard">
       {

    console.log("viewcard")
    } 
        
                         
                         <img 
                             onClick={() => setuser(item)} 
                             src={item.images[0] } 
                             alt={item.title} 
                         />
                         <p>{item.title}</p>
                         <div className="price" style={{ display: "flex"}}>
                             <p style={{ lineHeight: "0", fontSize: "14px" }}>₹{item.price}.00</p>
                             <p className="rating" style={{ justifyContent: "flex-end" }}><span>4.3</span></p>
                         </div>
                         <button className="featurebutton" onClick={() => send(item)}>Add to Cart</button>
                     </div>
  
    </div>
    </div>
  )
}

export default Viewcard
