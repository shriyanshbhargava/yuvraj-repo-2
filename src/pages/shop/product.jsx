import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Product = (props) => {
  const { _id, productName, amount, imageUrl, content, actualPrice } =
    props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[_id];

  const totalCartAmt = (amount * cartItemCount || 0).toFixed(2);

  return (
    <tr className="dataTable">
      <td width={190}>
        <img
          className="productImage"
          src={imageUrl}
          width="15"
          alt={imageUrl}
        />
      </td>
      <td width={190}>{productName}</td>
      <td width={190}>{content}</td>
      <td width={190} style={{ textDecoration: "line-through" }}>
        ₹ {actualPrice}
      </td>
      <td width={190}>₹ {amount}</td>
      <td width={190} className="addToCart">
        <button className="addToCartBttn" onClick={() => addToCart(_id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </td>
      <td width={190}> {cartItemCount}</td>
      <td width={190}>₹ {totalCartAmt}</td>
    </tr>
  );
};
