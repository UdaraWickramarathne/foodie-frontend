import React from "react";
import "@/pages/css/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <img src="/src/assets/error.gif" alt="Error GIF" className="error-gif" />
        <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
        <p className="not-found-suggestion">You can go back to the <a href="/">Home Page</a>.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
