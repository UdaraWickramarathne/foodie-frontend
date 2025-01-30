import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./order.css";
import { AdminContext } from "../../context/AdminContext";

const Order = () => {
  const { url, token } = useContext(AdminContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${url}/orders/pending`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        alert("Error fetching orders");
      }
    };
    fetchOrders();
  }, []);

  function countItems(orderDetails) {
    const items = orderDetails.split(",").map((item) => item.trim());
    return items.length;
  }

  return (
    <div className="order">
      <p>Order Page</p>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <div className="order-header">
              <div className="order-image">
                <img src="src/assets/parcel_icon.png" alt="Package" />
              </div>
              <div className="order-details">
                <p className="order-items">{order.orderDetails}</p>
                <p className="order-info">
                  {order.address.split(",").slice(0, 1).join(",").trim()}
                </p>
                <p className="order-info">
                  {order.address.split(",").slice(1, 3).join(",").trim()}
                </p>
                <p className="order-info">
                  {order.address.split(",").slice(3, 4).join(",").trim()}
                </p>
              </div>
              <div className="order-summary">
                <p>Items: {countItems(order.orderDetails)}</p>
                <p className="order-price">${order.totalAmount}</p>
              </div>
              <div className="order-status">
                <select
                  value={order.status}
                  onChange={(e) => {
                    const newOrders = [...orders];
                    newOrders[index].status = e.target.value;
                    setOrders(newOrders);
                  }}
                  className="status-dropdown"
                >
                  <option value="Delivered">Delivered</option>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
