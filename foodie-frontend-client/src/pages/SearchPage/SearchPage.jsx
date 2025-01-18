import React, { useState } from "react";
import "./SearchPage.css";

const SearchPage = () => {
  // Sample product data
  const [products] = useState([
    "Myco Farm Oyster Mushroom 200g",
    "4Ever Face Wash Aloe Lavender 100ml",
    "4Ever Face Wash Gold Whitening 100ml",
    "4Ever Face Wash Kohomba Kaha 100ml",
    "4Ever Face Wash Kohomba Kaha 185ml",
    "4Ever Face Wash Rose Anti Acne 100ml",
    "4Ever Face Wash Tea Tree Oil 100ml",
  ]);

  // Search input state
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    // Filter products
    if (value) {
      const filtered = products.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSearchInput(""); // Clear the input after selecting a product
    setFilteredProducts([]); // Hide the dropdown
  };

  // Clear search input
  const clearSearch = () => {
    setSearchInput("");
    setFilteredProducts([]);
  };

  return (
    <div className="search-page">
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Products"
            value={searchInput}
            onChange={handleSearchChange}
          />
          {searchInput && (
            <button className="clear-button" onClick={clearSearch}>
              ✕
            </button>
          )}
        </div>
        <div className="search-results">
          {searchInput && filteredProducts.length === 0 && (
            <div className="no-results">No products found</div>
          )}
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => handleProductClick(product)}
            >
              {product}
            </div>
          ))}
        </div>
      </div>
      <div className="search-page-content">
        {selectedProduct ? (
          <div className="selected-product">
            Selected Product: {selectedProduct}
          </div>
        ) : (
          <div>Please select a product to view details.</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
