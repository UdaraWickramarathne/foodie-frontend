import React, { useEffect, useState } from "react";
import axios from "axios";
import "./order.css";

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:4000/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('There was an error fetching the orders!', error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="order">
            <h2>Order Details</h2>
            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={index} className="order-item">
                        <p>Order ID: {order.id}</p>
                        <p>Customer: {order.customer}</p>
                        <p>Items: {order.items}</p>
                        <p>Status: {order.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;