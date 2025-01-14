import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/pages/Home_Page/Header";
import MainContent from "@/pages/Home_Page/MainContent";
import PopularCategories from "@/pages/Home_Page/Categories";
import CategoryPage from "@/pages/Home_Page/CategoryPage";
import ItemDetailsPage from "@/pages/Home_Page/ItemDetailsPage";
import Menu from "./pages/Home_Page/DishCard";
import Testimonials from "./pages/Home_Page/Testimonials";
import FeedbackPage from './pages/Home_Page/FeedbackPage';
import Service from "./pages/Home_Page/Service";
import Footer from "./pages/Home_Page/Footer";
import NotFound from "./pages/Home_Page/NotFound404"
import Cart from "./pages/Home_Page/Cart";
import Checkout from './pages/Home_Page/Checkout';

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainContent />
              <PopularCategories />
              <Menu />
              <Testimonials />
              <Service/>
              <Footer />
            </>
          }
        />
        
        {/* Category page */}
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        {/* Item details page */}
        <Route path="/category/:categoryId/item/:itemId" element={<ItemDetailsPage />} />
        <Route path="/dish/:id" element={<ItemDetailsPage/>} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
