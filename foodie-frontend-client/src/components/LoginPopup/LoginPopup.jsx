import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({
  setShowLogin,
  setAlertColor,
  setVisible,
  setAlertText,
}) => {
  const [currentState, setCurrentState] = useState("LOGIN");
  const { url, setToken, setUserId } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const clearData = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      username: "",
      password: "",
    });
  };

  const validateRegister = () => {
    if (password.length < 6) {
      setErrorData("Password must be atleast 6 characters long");
      return false;
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setErrorData("");
    let newUrl = url;
    if (currentState === "LOGIN") {
      newUrl += "/auth/login";
      try {
        const response = await axios.post(newUrl, data);
        console.log(response.data);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        setToken(response.data.token);
        setUserId(response.data.userId);
        setShowLogin(false);
      } catch (error) {
        setErrorData(error.response.data.message);
      }
    } else {
      newUrl += "/auth/register";
      try {
        await axios.post(newUrl, data);
        setAlertText("Account created successfully");
        setAlertColor("#64bf47");
        setVisible(true);
        clearData();
        setCurrentState("LOGIN");
      } catch (error) {
        console.log(error);
        setErrorData(error.response.data.message);
      }
    }
  };

  const [errorData, setErrorData] = useState(" ");

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "SIGNUP" ? (
            <>
              <input
                name="name"
                onChange={onInputChange}
                value={data.name}
                type="text"
                placeholder="Your name"
                required
              />
              <input
                name="email"
                value={data.email}
                onChange={onInputChange}
                type="email"
                placeholder="Your email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={onInputChange}
                placeholder="Your phone number"
                pattern="[0-9]{10}"
                required
              />
            </>
          ) : (
            <></>
          )}

          <input
            name="username"
            value={data.username}
            onChange={onInputChange}
            type="text"
            placeholder="Your username"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onInputChange}
            type="password"
            placeholder="Password"
            required
          />
          <p className="login-popup-error">{errorData}</p>
        </div>
        <button type="submit">
          {currentState === "SIGNUP" ? "Create Account" : "Login"}
        </button>
        {currentState === "SIGNUP" ? (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        ) : (
          <></>
        )}
        {currentState === "LOGIN" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("SIGNUP")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("LOGIN")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
