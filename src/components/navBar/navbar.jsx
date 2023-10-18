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
import { FiMenu, FiX } from "react-icons/fi";


export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

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
          alt="mainLogo"
          width={250}
          className="logoNav"
          src="https://yuvrajpyromart.com/images/yuvrajlogo.png"
        />
      </div>

      <div>
        {matches && (
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
        )}
        {!matches && (
          <nav className="navbar">
            <div onClick={handleClick} className="nav-icon">
              {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? "nav-links active" : "nav-links"}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link" onClick={closeMenu}>
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </Link>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link" onClick={closeMenu}>
                    Cart <ShoppingCart className="logoCart" />
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    to="/admin/signin"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {" "}
                    SignIn{" "}
                  </Link>
                </li>
              </li>
            </ul>
            <Link to="/shop">
              <button type="button" class="btn btn-light orderNow">
                Order Now
              </button>
            </Link>
           
          </nav>
        )}
      </div>
    </div>
  );
};
