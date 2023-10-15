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
    <div>
      {matches && (
        <table className="cartTable">
          <tr>
            <td width={70}>
              <img src={imageUrl} width="15"  alt={imageUrl} />
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
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), _id)
                  }
                />
                <button onClick={() => addToCart(_id)}> + </button>
              </div>
            </td>
          </tr>
        </table>
      )}
      {!matches && (
        <div>
          <div className="cartCardMob">
            {" "}
            <div className="cartCardStart">
              <img
                className="productImage"
                src={imageUrl}
                width="20"
                alt={imageUrl}
              />
            </div>
            <div className="cartCardMiddle">
              <span className="productName">{productName}</span>
              <p style={{ textDecoration: "line-through" }}>₹ {actualPrice}</p>
              <p>₹ {amount}</p>
            </div>
            <div className="cartCardEnd">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
