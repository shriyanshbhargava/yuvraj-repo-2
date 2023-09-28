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
      <div
        className="navbar-2"
        style={{ display: totalQuantity === 0 ? "none" : "block" }}
      >
        <h5>
          Total Quantity : {totalQuantity} | Total Amount : ₹ {totalAmount} |{" "}
          <Link to="/cart">
            <ShoppingCart color="#f4ecf2" size={32} />
          </Link>
        </h5>
      </div>
    </div>
  );
};
