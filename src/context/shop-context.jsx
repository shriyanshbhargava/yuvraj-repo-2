import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [userList, setUserList] = useState([]);

  const apiToken = localStorage.getItem("apiToken");

  const getProductList = () => {
    axios
      .get("https://cracker-shop.onrender.com/public/products/list", {})
      .then((res) => {
        setProductList(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProductList();
  }, []);

  // orderlist api

  const getOrderList = () => {
    axios
      .get("https://cracker-shop.onrender.com/orders/list", {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((res) => {
        setOrderList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrderList();
  }, []);

  //userList api

  const getUserList = () => {
    axios
      .get("https://cracker-shop.onrender.com/customers/list", {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((res) => {
        setUserList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserList();
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < productList.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productList.find((product) => product._id === item);
        totalAmount += cartItems[item] * itemInfo?.amount;
      }
    }
    return totalAmount;
  };

  const totalAmount = getTotalCartAmount();
  console.log(totalAmount);

  const getTotalActualCartAmount = () => {
    let totalActualAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productList.find((product) => product._id === item);
        totalActualAmount += cartItems[item] * itemInfo?.actualPrice;
      }
    }
    return totalActualAmount;
  };

  const getTotalCartQuantity = () => {
    let totalQuantity = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalQuantity += cartItems[item];
      }
    }
    return totalQuantity;
  };

  const addToCart = (item_Id) => {
    setCartItems((prev) => ({ ...prev, [item_Id]: (prev[item_Id] || 0) + 1 }));
  };

  const removeFromCart = (item_Id) => {
    setCartItems((prev) => ({ ...prev, [item_Id]: prev[item_Id] - 1 }));
  };

  const updateCartItemCount = (newAmount, item_Id) => {
    setCartItems((prev) => ({ ...prev, [item_Id]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const navigate = useNavigate();

  const handleLoginClick = async (username, password) => {
    try {
      const response = await axios.post(
        "https://cracker-shop.onrender.com/auth/login",
        {
          username,
          password,
        }
      );

      const { data } = response.data;

      if (data.length > 0) {
        localStorage.setItem("apiToken", data);
        navigate("/orders");
        getOrderList();
        getUserList();
        getProductList();
      }
    } catch (error) {
      alert("Login failed:", error);
    }
  };

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Make an API request to fetch the list of cities
    axios
      .get("https://cracker-shop.onrender.com/public/data/cities")
      .then((response) => {
        setCities(response.data.data); // Assuming "data" is the array of cities
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleCItySelect = (event) => {
    setSelectedCity(event.target.value);
  };

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    // Make an API request to fetch the list of states
    axios
      .get("https://cracker-shop.onrender.com/public/data/states")
      .then((response) => {
        setStates(response.data.data); // Assuming "data" is the array of cities
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
  };

  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    customerAddress: "",
    customerCity: "",
    customerState: "",
    orderItems: [
      {
        productId: "",
        quantity: "",
      },
    ],
    payableAmount: "",
  });

  const handleFormChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "productId" || name === "quantity") {
      const updatedOrderItems = [...formData.orderItems];
      updatedOrderItems[index][name] = value;
      setFormData({
        ...formData,
        orderItems: updatedOrderItems,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const orderItems = Object.keys(cartItems).map((item) => ({
      productId: item,
      quantity: cartItems[item],
    }));
    try {
      const response = await axios.post(
        "https://cracker-shop.onrender.com/public/orders/place",
        {
          ...formData,
          customerCity: selectedCity,
          customerState: selectedState,
          orderItems,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      );
      alert("Order placed:", response.data);
      navigate("/invoice");
    } catch (error) {
      alert("Error placing order:", error);
    }
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getTotalCartQuantity,
    getTotalActualCartAmount,
    productList,
    orderList,
    userList,
    getOrderList,
    getProductList,
    handleLoginClick,
    handleFormSubmit,
    handleFormChange,
    handleStateSelect,
    handleCItySelect,
    getUserList,
    formData,
    cities,
    states,
    selectedCity,
    selectedState,
    totalAmount,
    // handleLogin,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
