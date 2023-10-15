import { Navbar2 } from "../../components/navBar/navbar2";
import { Product } from "./product";
import { ProductMob } from "./productMob";
import "./shop.css";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { Helmet } from "react-helmet";

export const Shop = () => {
  const { productList } = useContext(ShopContext);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="shop">
      <Helmet>
        <link
          rel="icon"
          type="image/ico"
          href="../../../public/yuvrajlogo.ico"
        />
        <title>Yuvraj Pyro Mart</title>
        <meta name="description" content="Light Up Your Celebrations!" />
      </Helmet>
      <img
        className="shopBanner"
        src="https://yuvrajpyromart.com/images/pricelist.jpg"
        alt="../../assets/banners/mainPageBanner.jpg"
      />
      <thead className="tableHead">
        <th>Image</th>
        <th>Product Name</th>
        <th>Content</th>
        <th>Actual Price</th>
        <th>Amount</th>
        <th>Add To Cart</th>
        <th>Quantity</th>
        <th>Total</th>
      </thead>
      <div>
        {matches && (
          <div>
            {productList.map((product) => (
              <Product data={product} />
            ))}
          </div>
        )}
        {!matches && (
          <div>
            {productList.map((product) => (
              <ProductMob data={product} />
            ))}
          </div>
        )}
      </div>

      <Navbar2 />
    </div>
  );
};
