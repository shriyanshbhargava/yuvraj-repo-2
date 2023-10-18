import React, { useContext } from "react";
import "./navbar.css";
import { ShopContext } from "../../context/shop-context";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar2 = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const { getTotalCartQuantity } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const totalQuantity = getTotalCartQuantity();

  return (
    <div>
      <div className="navbar-2">
        <p>
          Total Quantity : {totalQuantity} | Total Amount : ₹ {totalAmount} |{" "}
          <Link to="/cart">
            Cart <ShoppingCart className="cartLogo" color="#f4ecf2" />
          </Link>
        </p>
      </div>
    </div>
  );
};
