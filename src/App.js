import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navBar/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/Contact/contact";
import { Cart } from "./pages/Cart/cart";
import SignUp from "./pages/Dashboard/login/auth/SignUp";
import { ShopContextProvider } from "./context/shop-context";
import PDFGenerator from "./pages/invoice/genPDF";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/about";
import Orders from "./pages/Dashboard/orders/orders";
import Products from "./pages/Dashboard/products/products";
import Users from "./pages/Dashboard/users/users";

function App() {
  return (
    <div className="App">
      <Router>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/invoice" element={<PDFGenerator />} />
            <Route path="/checkout" element={<PDFGenerator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/productList" element={<Products />} />
            <Route path="/users" element={<Users />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
