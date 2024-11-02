import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchTerm } from '../slice/Productslice'

function Navbar() {

  const {carts} = useSelector((state)=>state.allcart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ search , setSearch ] = useState(); 

  const handelsubmit = (e) => {
   e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/searchproduct");
  }




  return (
    <div>
      <nav className="flex">
        <div className="container navbar flex">
        <div className="logo">
            <p onClick={()=>navigate("/")} >Rising Clothes</p>
        </div>

        <form  onSubmit={handelsubmit}>
          <div className="input" style={{display:"flex", position:"relative", justifyContent:"space-between"}}>
          <input type="text" placeholder="search products" onChange={(e)=>setSearch(e.target.value)}  />
          <i class="fa-solid fa-magnifying-glass search" style={{position:"absolute"}}></i>
          </div>
        </form>

        <div className="nav-list ">
            <ul className="flex">
                <li>
                    <NavLink  className="nav-link" to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link"  to={"/product"}>Shop</NavLink>
                </li>
                <li>
                    <NavLink  className="nav-link" to={"/about"}>Contact</NavLink>
                </li>
                <li>
                    <NavLink style={{position:"relative"}} className="nav-link"  to={"/contact"}>Cart<span style={{position:"absolute"}}>{carts.length}</span></NavLink>
                </li>
                
            </ul>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
