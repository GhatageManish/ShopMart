import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Cart from "./pages/Cart"
import Chekout from "./pages/Chekout";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Chekout/>} />
          <Route path="/order-confirm" element={<OrderConfirmation/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;