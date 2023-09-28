import React, { useContext, useState } from "react";
import "./signup.css";
import { ShopContext } from "../../../../context/shop-context";

const SignUp = () => {
  const { handleLoginClick } = useContext(ShopContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <div class="right">
        <form>
          <div>
            <div class="form">
              <div class="inputbox">
                <label>userName</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your Username"
                  required
                />
              </div>
              <div class="inputbox">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <div class="create">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLoginClick(username, password);
                  }}
                >
                  Login{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
