import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddProductForm from "./pages/AddProductForm";
import AllProducts from "./pages/AllProductPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddProductForm />
      <AllProducts />
    </>
  );
}

export default App;
