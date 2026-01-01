import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, cartCount, cartPrice, addToCart, removeFromCart } = useCart();
  console.log("CART STATE:", cart);


  if (cartCount === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Your cart is empty 🛒
        </h2>
        <Link
          to="/"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          ← Back to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">
            Shopping Cart ({cartCount})
          </h2>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            ← Back to Store
          </Link>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-md"
            >
              {/* Product Info */}
              <img src={item.image} alt="" className="    w-20 h-20 
    sm:w-24 sm:h-24
    object-cover
    rounded-xl
    border border-gray-700
    bg-gray-900
    flex-shrink-0"/>
              <div className="mb-4 sm:mb-0">
<h4 className="text-lg font-semibold text-white">
  {item.name}
</h4>


                <p className="text-white-400">₹{item.price}</p>
                <p className="text-gray-300">
                  Quantity: <span className="font-medium">{item.quantity}</span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                  −
                </button>

                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id, true)}
                  className="px-4 py-1 rounded-lg bg-red-600 text-white hover:bg-red-500 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-6">
          <h3 className="text-2xl font-semibold text-white">
            Total: ₹{cartPrice}
          </h3>

          <Link to={'/checkout'} className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-xl transition">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;