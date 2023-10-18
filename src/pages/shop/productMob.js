import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const ProductMob = (props) => {
  const { _id, productName, amount, imageUrl, actualPrice } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const cartItemCount = cartItems[_id];

  const totalCartAmt = (amount * cartItemCount || 0).toFixed(2);

  return (
    <div className="productCardMob">
      {" "}
      <div className="productCardStart">
        <img
          className="productImage"
          src={imageUrl}
          width="20"
          alt={imageUrl}
        />
      </div>
      <div className="productCardMiddle">
        <span className="productName">{productName}</span>
        <p style={{ textDecoration: "line-through" }}>₹ {actualPrice}</p>
        <p>₹ {amount}</p>
      </div>
      <div className="productCardEnd">
        <div className="addToCart">
          <div className="countHandler">
            <button onClick={() => removeFromCart(_id)}> - </button>
            <input
              value={cartItems[_id]}
              defaultValue={0}
          
                min={0}
              onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
            />
            <button onClick={() => addToCart(_id)}> + </button>
          </div>
          <button className="addToCartBttn" onClick={() => addToCart(_id)}>
            Add Item {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>

        <span className="totalCartAmt">₹ {totalCartAmt}</span>
      </div>
    </div>
  );
};
