import React, { useState, useEffect } from "react";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Store image URL in state
  const [imageUrls, setImageUrls] = useState({});

  // Fetch all products when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Set loading to false after data is fetched
        fetchProductImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Fetch images for each product and store the image URLs
  const fetchProductImages = (products) => {
    products.forEach((product) => {
      axios
        .get(`http://localhost:8080/api/product/${product.id}/image`, {
          responseType: "blob",
        })
        .then((response) => {
          const imageUrl = URL.createObjectURL(response.data);
          setImageUrls((prevState) => ({
            ...prevState,
            [product.id]: imageUrl, // Save the image URL with product id as key
          }));
        })
        .catch((error) => {
          console.error("Error fetching product image:", error);
        });
    });
  };

  // Render product list
  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="product-list">
      <h1>All Products</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              {/* Display product image if available */}
              {imageUrls[product.id] && (
                <img
                  width={200}
                  src={imageUrls[product.id]}
                  alt={product.name}
                  className="product-image"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
