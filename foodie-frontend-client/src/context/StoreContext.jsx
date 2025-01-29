import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const url = "http://localhost:8080";

  const addToCart = (productId, quantity) => {
    setCartItems((prev) => ({ ...prev, [productId]: quantity }));
  };

  const incrementCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const decrementCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((food) => food._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (!token) return;

        const response = await axios.get(`${url}/auth/validate?token=${token}`);
        console.log("Token validation response:", response.data);

        const { userId: validatedUserId } = response.data;
        setToken(token);
        setUserId(validatedUserId);

        localStorage.setItem("token", token);
        localStorage.setItem("userId", validatedUserId);
      } catch (error) {
        console.error("Error validating token:", error.response?.data || error);

        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setToken("");
        setUserId("");
      }
    };

    validateToken();
  }, [token, url]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    incrementCart,
    decrementCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
    url,
    userId,
    setUserId,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
