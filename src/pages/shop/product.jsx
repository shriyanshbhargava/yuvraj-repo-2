import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Product = (props) => {
  const { _id, productName, amount, imageUrl, content, actualPrice } =
    props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[_id];

  const totalCartAmt = amount * cartItemCount || 0;

  return (
    <tr className="dataTable">
      <td>
        <img src={imageUrl} width="50" height="50" alt={imageUrl} />
      </td>
      <td>{productName}</td>
      <td>{content}</td>
      <td style={{ textDecoration: "line-through" }}>₹ {actualPrice}</td>
      <td>₹ {amount}</td>
      <td>
        <button className="addToCartBttn" onClick={() => addToCart(_id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </td>
      <td> {cartItemCount}</td>
      <td>₹ {totalCartAmt}</td>
    </tr>
  );
};
