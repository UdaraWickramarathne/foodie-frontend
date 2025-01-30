import React, { useEffect, useState } from "react";
import axios from "axios";
import "./order.css";

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:8080/orders");
                // Filter out delivered orders
                const pendingOrders = response.data.filter(order => order.status !== "Delivered");
                setOrders(pendingOrders);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, []);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.patch(`http://localhost:8080/orders/${orderId}/set`, null, {
                params: { status: newStatus }
            });
            // Refresh the orders list after update
            const response = await axios.get("http://localhost:8080/orders");
            const pendingOrders = response.data.filter(order => order.status !== "Delivered");
            setOrders(pendingOrders);
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

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
                                <p className="order-items">{order.order_details}</p> {/* Adjust field name if needed */}
                                <p className="order-info">{order.user_id}</p> {/* Replace with actual user name field */}
                                <p className="order-info">{order.address}</p>
                                {/* Add phone number if available */}
                            </div>
                            <div className="order-summary">
                                <p>Items: {order.itemCount}</p> {/* Adjust based on your data */}
                                <p className="order-price">${order.total_amount}</p>
                            </div>
                            <div className="order-status">
                                <select
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                    className="status-dropdown"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Food Processing">Food Processing</option>
                                    {/* Delivered option removed to prevent selection */}
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