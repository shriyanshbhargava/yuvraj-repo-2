import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./invoice.css";

export const InvoiceItem = (props) => {
  const { _id, productName, amount, content, actualPrice } = props.data;
  const { cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[_id];
  const totalCartAmt = amount * cartItemCount;

  return (
    <div class="table-responsive">
      <div class="table align-middle table-nowrap table-centered mb-0">
        <table className="itemTable">
          <tr>
            <td >
              <div>
                <h5 class="text-truncate small  mt-0">{productName} </h5>
                <h6 class="text-muted mb-0">{content}</h6>
              </div>
            </td>
            <td style={{ textDecoration: "line-through" }}>₹ {actualPrice}</td>
            <td >₹ {amount}</td>
            <td>{cartItemCount}</td>
            <td class="text-end p-2">₹ {totalCartAmt}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
