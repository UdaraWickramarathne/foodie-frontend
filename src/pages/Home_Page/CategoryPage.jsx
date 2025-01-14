import React from "react";
import { Link, useParams } from "react-router-dom";

const items = {
  1: [
    { id: 1, name: "Pizza", description: "Delicious cheesy pizza" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
    { id: 2, name: "Pasta", description: "Classic Italian pasta" },
  ],
  2: [
    { id: 3, name: "Pancakes", description: "Fluffy pancakes with syrup" },
    { id: 4, name: "Omelette", description: "Egg omelette with veggies" },
  ],
  3: [
    { id: 5, name: "Ice Cream", description: "Chilled and creamy" },
    { id: 6, name: "Cake", description: "Soft and sweet cake" },
  ],
  4: [{ id: 7, name: "All Items", description: "Browse all dishes" }],
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const categoryItems = items[categoryId] || [];

  return (
    <div style={{ textAlign: "center", margin: "2px" }}>
      <h1>Category {categoryId}</h1>
      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}>
        {categoryItems.map((item) => (
          <Link
            to={`/category/${categoryId}/item/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", display: "block", margin: "10px 0" }}
          >
            <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
