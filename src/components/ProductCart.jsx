import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const {addToCart}=useCart();
  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 
                    overflow-hidden flex flex-col h-full 
                    transition duration-300 hover:scale-[1.02] hover:shadow-orange-500/20">

      {/* Image Section */}
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition duration-500 hover:scale-110"
        />

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-orange-500 text-black 
                        text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          ₹{product.price.toFixed(2)}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-white font-semibold text-lg leading-tight 
                         hover:text-orange-400 transition">
            {product.name}
          </h3>
        </Link>

        {/* Optional description */}
        {product.description && (
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Action Button */}
        <button
          className="mt-4 bg-orange-500 text-black font-semibold py-2 rounded-xl
                     hover:bg-orange-400 transition cursor-pointer" onClick={()=>addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;