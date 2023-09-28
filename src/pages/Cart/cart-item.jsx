import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { _id, productName, amount, imageUrl, content, actualPrice } =
    props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <table className="cartTable">
      <tr>
        <td width={70}>
          <img src={imageUrl} width="50" height="50" alt={imageUrl} />
        </td>
        <td>{productName}</td>
        <td style={{ textDecoration: "line-through" }}>₹ {actualPrice}</td>

        <td>₹ {amount}</td>
        <td>{content}</td>
        <td width={150}>
          <div className="countHandler">
            <button onClick={() => removeFromCart(_id)}> - </button>
            <input
              value={cartItems[_id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
            />
            <button onClick={() => addToCart(_id)}> + </button>
          </div>
        </td>
      </tr>
    </table>
  );
};
