import { Navbar2 } from "../../components/navBar/navbar2";
import { Product } from "./product";
import "./shop.css";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { productList } = useContext(ShopContext);

  return (
    <div className="shop">
      <img
        className="shopBanner"
        src="https://yuvrajpyromart.com/images/pricelist.jpg"
        alt="../../assets/banners/mainPageBanner.jpg"
      />
      <tr className="tableHead">
        <th>Image</th>
        <th>Product Name</th>
        <th>Content</th>
        <th>Actual Price</th>
        <th>Amount</th>
        <th>Add To Cart</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      {productList.map((product) => (
        <Product data={product} />
      ))}
      <Navbar2 />
    </div>
  );
};
