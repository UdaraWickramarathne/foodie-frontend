import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@/pages/css/dishcard.css";

const Menu = () => {
  const dishes = [
    {
      id: 1,
      name: "Fattoush Salad",
      description: "Crispy vegetables with sumac dressing",
      price: 24.0,
      rating: 4.9,
      image: "src/assets/dish/Fattoush Salad.jpg",
    },
    {
      id: 2,
      name: "Vegetable Salad",
      description: "Fresh seasonal veggies",
      price: 26.0,
      rating: 4.6,
      image: "src/assets/dish/Vegetable Salad.jpg",
    },
    {
      id: 3,
      name: "Egg Vegi Salad",
      description: "Boiled egg with healthy greens",
      price: 23.0,
      rating: 4.5,
      image: "src/assets/dish/Egg Vegi Salad.jpg",
    },
    {
      id: 4,
      name: "Chicken Salad",
      description: "Grilled chicken with mixed greens",
      price: 28.0,
      rating: 4.8,
      image: "src/assets/dish/Chicken Salad.jpg",
    },
    {
      id: 5,
      name: "Fruit Salad",
      description: "Seasonal fruits with honey dressing",
      price: 22.0,
      rating: 4.7,
      image: "src/assets/dish/Fruit Salad.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const dishesPerPage = 3;

  const handleNext = () => {
    if (startIndex + dishesPerPage < dishes.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleDishes = dishes.slice(startIndex, startIndex + dishesPerPage);

  return (
    <div className="menu-container" id="menu">
      <div className="special-dishes-label">SPECIAL DISHES</div>
      <div className="header-section">
        <h1 className="section-title">
          Standout Dishes
          <br />
          From Our Menu
        </h1>
        <div className="navigation-buttons">
          <button className="nav-btn" onClick={handlePrev} disabled={startIndex === 0}>
            ←
          </button>
          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={startIndex + dishesPerPage >= dishes.length}
          >
            →
          </button>
        </div>
      </div>
      <div className="dishes-grid">
        {visibleDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <Link to={`/dish/${dish.id}`}>
        <img src={dish.image} alt={dish.name} />
        <h3 className="dish-title">{dish.name}</h3>
        <p className="dish-description">{dish.description}</p>
        <div className="dish-details">
          <span className="dish-price">${dish.price.toFixed(2)}</span>
          <span className="dish-rating">★ {dish.rating.toFixed(1)}</span>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
