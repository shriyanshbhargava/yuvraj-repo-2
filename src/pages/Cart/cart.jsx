import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
  const {
    cartItems,
    getTotalCartAmount,
    productList,
    handleFormSubmit,
    handleFormChange,
    handleStateSelect,
    handleCItySelect,
    formData,
    cities,
    states,
    selectedCity,
    selectedState,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="cartMain">
        <div className="userDetails">
          <h1 className="mb-5">Enter Shipping Details</h1>
          <form className="userDetailsForm">
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="form6Example1">
                    First name
                  </label>
                  <input
                    name="customerName"
                    value={formData.customerName}
                    onChange={(e) => handleFormChange(e)}
                    id="form6Example1"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form6Example5">
                Email
              </label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={(e) => handleFormChange(e)}
                id="form6Example5"
                class="form-control"
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form6Example6">
                Phone
              </label>
              <input
                type="text"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={(e) => handleFormChange(e)}
                id="form6Example6"
                class="form-control"
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form6Example4">
                Address
              </label>
              <input
                type="text"
                name="customerAddress"
                value={formData.customerAddress}
                onChange={(e) => handleFormChange(e)}
                id="form6Example4"
                class="form-control"
              />
            </div>

            <div class="form-outline mb-4">
              <div class="col-3">
                <div className="states">
                  <select onChange={handleCItySelect} value={selectedCity}>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.city}>
                        {city.city}
                      </option>
                    ))}
                  </select>
                  {selectedCity && <p>You selected: {selectedCity}</p>}
                </div>
                <div className="states">
                  <label>Select a state: </label>
                  <select onChange={handleStateSelect} value={selectedState}>
                    <option value="">Select a state</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.state}>
                        {state.state}
                      </option>
                    ))}
                  </select>
                  {selectedState && <p>You selected state: {selectedState}</p>}
                </div>

                <input type="text" class="form-control" placeholder="Zip" />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleFormSubmit}
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Place Order
            </button>
          </form>
        </div>
        <div className="vr d-flex justify-content-center"></div>
        <div>
          {matches && (
            <div>
              <div className="cart">
                <div className="cartTitle">
                  <h1>Your Cart Items</h1>
                </div>
                <div className="cart">
                  {productList.map((product) => {
                    if (cartItems[product._id] || 0) {
                      return <CartItem data={product} />;
                    }
                  })}
                </div>

                {totalAmount > 0 ? (
                  <div className="checkout">
                    <h4> Subtotal: ₹ {totalAmount} </h4>
                  </div>
                ) : (
                  <h1 className="cartEmpty"> Your Shopping Cart is Empty</h1>
                )}
              </div>
            </div>
          )}
          {!matches && (
            <div className="cartMob">
              <div className="cart">
                <div className="cartTitle">
                  <h1>Your Cart Items</h1>
                </div>
                <div className="cart">
                  {productList.map((product) => {
                    if (cartItems[product._id] || 0) {
                      return <CartItem data={product} />;
                    }
                  })}
                </div>

                {totalAmount > 0 ? (
                  <div className="checkout">
                    <h4> Subtotal: ₹ {totalAmount} </h4>
                  </div>
                ) : (
                  <h1 className="cartEmpty"> Your Shopping Cart is Empty</h1>
                )}
              </div>
            </div>
          )}
        </div>
    </div>
  );
};
