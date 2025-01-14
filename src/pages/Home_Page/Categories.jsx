import React from "react";
import { Link } from "react-router-dom";
import "@/pages/css/PopularCategories.css";

const categories = [
  { id: 1, title: "Main Dish", subtitle: "(86 dishes)", image: "src/assets/cate/main.jpg" },
  { id: 2, title: "Break Fast", subtitle: "(12 break fast)", image: "src/assets/cate/breakf.jpg" },
  { id: 3, title: "Dessert", subtitle: "(48 dessert)", image: "src/assets/cate/desert.jpg" },
  { id: 4, title: "Browse All", subtitle: "(255 items)", image: "src/assets/cate/brows.jpg" },
];

const PopularCategories = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1px", color: "#ff0000" }}>
        CUSTOMER FAVORITES
      </div>
      <h1>Popular Categories</h1>
      <div className="categories-container">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id} className="category-link">
            <div className="category-card">
              <img src={category.image} alt={category.title} className="category-image" />
              <h4>{category.title}</h4>
              <p>{category.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
