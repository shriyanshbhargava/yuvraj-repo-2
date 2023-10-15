import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { _id, productName, amount, imageUrl, content, actualPrice } =
    props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <table className="cartTable">
      {matches && (
        <tr>
          <td width={70}>
            <img src={imageUrl} width="10" alt={imageUrl} />
          </td>
          <td>{productName}</td>
          <td
            className="acutalPrice"
            style={{ textDecoration: "line-through" }}
          >
            ₹ {actualPrice}
          </td>
          <td>₹ {amount}</td>
          <td className="content">{content}</td>
          <td width={150}>
            <div className="countHandler">
              <button onClick={() => removeFromCart(_id)}> - </button>
              <input
                value={cartItems[_id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), _id)
                }
              />
              <button onClick={() => addToCart(_id)}> + </button>
            </div>
          </td>
        </tr>
      )}
      {!matches && (
        <tr className="cartTableMob">
          <td width={20}>
            <img src={imageUrl} width="10" alt={imageUrl} />
          </td>
          <td width={40}>{productName}</td>
          <td width={40}>₹ {amount}</td>
        </tr>
      )}
    </table>
  );
};
