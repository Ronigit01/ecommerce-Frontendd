import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast'
import { addtocart } from '../slice/cartslice';
import Footer from './Footer';


function Searchproduct() {  

    const filterdata = useSelector(state => state.allproducts.filterdata);
    console.log(filterdata)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setuser = (item) =>{
      navigate(`/featured/${item.id}`)
      console.log(item)
    }

    const send = (e) =>{
      dispatch(addtocart(e));
      toast.success("item added in your cart");
    }
  

  return (
    <>
    <div className="container flex content  " style={{flexWrap:"wrap",minHeight:"65vh"}}>
    {
        filterdata.map((item)=>{
            return(
                <div>
                 <div  className="newcard">
                  
                    <img onClick={()=>setuser(item)} src={item.images[0]} alt="" />
                    <p>{item.title}</p>
                    
                    <div className="price" style={{display:"flex"}}>
                    <p style={{lineHeight:"0",fontSize:"14px"}}>₹{item.price}.00</p>
                    <p className="rating" style={{justifyContent:"flex-end"}}><span>4.3</span></p>
                    </div>
                    

                    <button className="featurebutton" onClick={()=>send(item)}>Add to Cart</button>
                    
                   
                </div>
             
                </div>
            )
        })
    }
    </div>
      
    < Footer />
    </>
  )
}

export default Searchproduct
