import React, { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    try {
      const response = await axios.post(
        "http://localhost:8080/api/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Product added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
      </div>

      <div style={formGroupStyle}>
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
          style={textareaStyle}
        />
      </div>

      <div style={formGroupStyle}>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
      </div>

      <div style={formGroupStyle}>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
      </div>

      <div style={formGroupStyle}>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
          required
          style={inputStyle}
        />
      </div>

      <button type="submit" style={buttonStyle}>
        Add Product
      </button>
    </form>
  );
};

const formStyle = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
};

const formGroupStyle = {
  marginBottom: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  borderRadius: "3px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  ...inputStyle,
  height: "100px",
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

export default AddProductForm;
