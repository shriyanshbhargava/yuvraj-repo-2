import React from "react";
import { Link } from "react-router-dom";
import { FacebookLogo, InstagramLogo, MapPin, ShoppingCart, WhatsappLogo } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
 

  return (
    <div className="Navbar">
    <div className="topNavbar">
        <h7> <MapPin />  Near Jaihindpuram market, Satya Sai Nagar, TVS Nagar, Madurai-11  <WhatsappLogo /> +91 96299 75555</h7>
      </div>
      <div className="middleNavbar">
    <img width={250} src="https://yuvrajpyromart.com/images/yuvrajlogo.png" />
    
      </div>
      <div className="navbar-1">
      
        <div className="links-1">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/shop"> Products </Link>
          <Link to="/contact"> Contact </Link>

          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
          <Link to="/signin"> SignIn </Link>

        </div>
      </div>
    </div>
  );
};
