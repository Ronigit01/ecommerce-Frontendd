import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
            <div className="footer">
          <div className="description">
            <p style={{fontSize:"18px"}}>Rising clothes</p>
            <p >
              E-commerce, or electronic commerce, refers to any type of
              commercial transaction that takes place over the internet.
              
            </p>
          </div>

          <div className="quicklinks">
            <p style={{fontSize:"18px"}}>Quick Links</p>
            
                <li>
                    <NavLink style={{color:"white"}}  to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink style={{color:"white"}} to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink style={{color:"white"}} to={"/product"}>Product</NavLink>
                </li>
                <li>
                    <NavLink style={{color:"white"}} to={"/contact"}>Contact</NavLink>
                </li>
          
          </div>

            <div className="followus">
                <p style={{fontSize:"18px"}}>Follow Us</p>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                <br />
                <form className="form" action="" style={{display:"flex"}}>
                    <input type="text" placeholder="your email"/>
                    <button>subscribe</button>
                </form>
            </div>


        </div>
            <div className="outline"></div>
            <div className="copyright">
                <p>@ copyright form roni</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
