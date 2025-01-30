import React, { useEffect, useState } from "react";
import axios from "axios";
import "./order.css";

const dummyOrders = [
    {
        id: 1,
        customerName: "John Doe",
        address: "123 Main St, New York, NY 10001",
        phone: "9876543210",
        items: "Greek salad x 2, Veg salad x 1, Clover Salad x 2, Chicken Salad x 4, Lasagna Rolls x 2, Peri Peri Rolls x 2",
        itemCount: 6,
        totalPrice: 224,
        status: "Delivered"
    },
    {
        id: 2,
        customerName: "Jane Smith",
        address: "456 Park Ave, San Francisco, CA 94102",
        phone: "9876543211",
        items: "Greek salad x 3, Veg salad x 2",
        itemCount: 2,
        totalPrice: 74,
        status: "Food Processing"
    }
];

const Order = () => {
    const [orders, setOrders] = useState(dummyOrders);

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
                                <p className="order-items">{order.items}</p>
                                <p className="order-info">{order.customerName}</p>
                                <p className="order-info">{order.address}</p>
                                <p className="order-info">{order.phone}</p>
                            </div>
                            <div className="order-summary">
                                <p>Items: {order.itemCount}</p>
                                <p className="order-price">${order.totalPrice}</p>
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