import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlignCenterVertical,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PhoneCall,
  ShoppingCart,
  SlidersHorizontal,
  WhatsappLogo,
} from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="Navbar">
      <div className="topNavbar">
        <div>
          {matches && (
            <h7>
              {" "}
              <MapPin /> Near Jaihindpuram market, Satya Sai Nagar, TVS Nagar,
              Madurai-11 <WhatsappLogo /> +91 96299 75555
            </h7>
          )}
          {!matches && (
            <div className="mobileTopNav text-white">
              {" "}
              <a href="https://api.whatsapp.com/send?phone=919629975555">
                <WhatsappLogo size={25} color="white" />
              </a>
              |
              <a href="tel:9196299 75555">
                <PhoneCall size={25} color="white" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="middleNavbar">
        <img
          width={250}
          className="logoNav"
          src="https://yuvrajpyromart.com/images/yuvrajlogo.png"
        />
      </div>
      <div className="navbar-1">
        <div className="links-1">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/shop"> Products </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            Cart <ShoppingCart className="logoCart" />
          </Link>
          <Link to="/admin/signin"> SignIn </Link>
        </div>
      </div>
    </div>
  );
};
