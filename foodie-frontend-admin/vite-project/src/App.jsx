import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Add from "./Pages/Add/add";
import Order from "./Pages/Order/order";
import List from "./Pages/List/list";
import Promocode from "./Pages/Promocode/promocode";
import AuthForm from "./Components/AuthForm/AuthForm";
import Dashboard from "./Pages/Dashboard/dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <div className="app">
        <AuthForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/order" element={<Order />} />
          <Route path="/list" element={<List />} />
          <Route path="/promocode" element={<Promocode />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<List />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;