import React, { useEffect, useState } from "react";
import axios from "axios";
import "./list.css";

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:4000/items');
                setList(response.data);
            } catch (error) {
                console.error('There was an error fetching the items!', error);
            }
        };
        fetchItems();
    }, []);

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/delete-item/${id}`);
            setList(list.filter(item => item.id !== id));
        } catch (error) {
            console.error('There was an error deleting the item!', error);
        }
    };

    return (
        <div className="list add flex-col">
            <p>All Food List</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className="list-table-format">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                            <p className="cursor" onClick={() => deleteItem(item.id)}>X</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default List;