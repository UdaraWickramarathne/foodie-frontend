import React, { useState } from "react";
import { useParams } from "react-router-dom";

const itemDetails = {
  1: { name: "Pizza", description: "A tasty cheesy pizza with fresh toppings." },
  2: { name: "Pasta", description: "Italian pasta with a creamy Alfredo sauce." },
  3: { name: "Pancakes", description: "Fluffy pancakes served with syrup." },
  4: { name: "Omelette", description: "Egg omelette filled with fresh vegetables." },
  5: { name: "Ice Cream", description: "A variety of chilled creamy ice cream." },
  6: { name: "Cake", description: "Delicious cake for your sweet cravings." },
  7: { name: "All Items", description: "Browse through all available items." },
  8: { name: "Fattoush Salad", description: "A fresh and healthy salad with a tangy dressing." },
  9: { name: "Vegetable Salad", description: "A colorful salad with a mix of fresh vegetables." },
  10: { name: "Fruit Salad", description: "A refreshing fruit salad with a hint of mint." },
  
};

const ItemDetailsPage = () => {
  const { itemId } = useParams();
  const item = itemDetails[itemId] || { name: "Unknown", description: "No details available." };

   const [quantity, setQuantity] = useState(1);

   const increaseQuantity = () => setQuantity((prev) => prev + 1);
   const decreaseQuantity = () => {
     if (quantity > 1) setQuantity((prev) => prev - 1);
   };

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img
          src={`https://via.placeholder.com/300`} // Replace with item-specific image URLs
          alt={item.name}
          style={styles.image}
        />
      </div>
      <div style={styles.detailsSection}>
        <h1 style={styles.itemName}>{item.name}</h1>
        <p style={styles.price}>€ 7.90</p>
        <div style={styles.quantitySection}>
          <button style={styles.quantityButton} onClick={decreaseQuantity}>
            -
          </button>
          <span style={styles.quantityValue}>{quantity.toString().padStart(2, "0")}</span>
          <button style={styles.quantityButton} onClick={increaseQuantity}>
            +
          </button>
        </div>
        <p style={styles.description}>{item.description}</p>
        <button style={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px",
    fontFamily: "'Arial', sans-serif",
  },
  imageSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8E2DC", // Light green background
    padding: "20px",
    borderRadius: "15px 0 0 15px",
  },
  image: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "0 15px 15px 0",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  itemName: {
    padding: "10px",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#333",
  },
  price: {
    fontSize: "24px",
    color: "#4CAF50",
    margin: "10px 0",
  },
  quantitySection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
  },
  quantityButton: {
    fontSize: "18px",
    padding: "10px",
    backgroundColor: "#F0F0F0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  },
  quantityValue: {
    color: "#333",
    margin: "0 15px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    margin: "20px 0",
  },
  addToCartButton: {
    fontSize: "18px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ItemDetailsPage;
