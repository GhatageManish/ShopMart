import { Link } from "react-router-dom";
import { Home, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbar() {
    const {cartCount}=useCart();
  return (
    <header className="sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Home />
            <h1>
              Shop <span className="text-orange-400">Mart</span>
            </h1>
          </div>
        </Link>

        <nav>
          <Link to="/cart">
            <ShoppingCart />
          </Link>
          <p>{cartCount}</p>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;