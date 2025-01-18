import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/Add/add";
import Order from "./Pages/Order/order";
import List from "./Pages/List/list";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
          <Sidebar />
          <Routes >
            <Route path="/add" element={<Add />} />
            <Route path="/order" element={<Order />} />
            <Route path="/list" element={<List />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;