import React, { useState } from "react";
import "./MyOrders.css";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        <div className="my-orders-order">
          <img src={assets.parcel_icon} alt="" />
          <p>Rolls x 2</p>
          <p>200</p>
          <p>Items: 10</p>
          <p>
            <span>&#x25cf;</span> <b>PENDING</b>
          </p>
          <button>Track Order</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
