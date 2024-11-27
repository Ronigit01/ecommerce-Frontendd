import React from "react";

function About() {
  return (
    <div>
      <div className="container">
        <div className="contactfree">
        <h2>Feel Free to Contact</h2>
        </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61430462.484265074!2d-47.8023207!3d19.990968999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277cb79fc1403%3A0x7fa76a21434a8d20!2sAddcart.in%20(Ecommerce%20Store)!5e0!3m2!1sen!2sin!4v1730345587872!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{border:"0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container" style={{width:"100%", display:"flex",alignItems:"center", justifyContent:"center"}}>
          <form action=""  method="POST">

            <div className="contact">
            <input  type="email" placeholder="email" name="email" required  autoComplete="off"/>
            <input   type="text" placeholder="username" name="username" required autoComplete="off" />

            <textarea  id="" placeholder="enter your message" cols="30" rows="10" autoComplete="off"></textarea>
            <input type="submit" value="send" className="buttonn" style={{border:"none",boxShadow:"none",width:"64%"}}/>

            </div>
           
          </form>

          <br />
          <br />
          <br />
          <br />
        </div>
    </div>
  );
}

export default About;
