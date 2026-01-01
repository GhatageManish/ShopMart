import React from "react";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function OrderConfirmation() {
  const { cartPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-gray-800 rounded-2xl shadow-2xl p-10 text-center border border-gray-700">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle size={80} className="text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Order Placed Successfully!
        </h1>

        {/* Message */}
        <p className="text-gray-300 mb-8">
          Thank you for shopping with <span className="text-orange-400 font-semibold">ShopMart</span>.
          Your order has been confirmed and will be shipped soon.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-700">
          <div className="flex justify-between text-gray-300 text-lg mb-2">
            <span>Order Total</span>
            <span className="font-semibold text-white">₹{cartPrice}</span>
          </div>
          <div className="flex justify-between text-gray-400 text-sm">
            <span>Payment Status</span>
            <span className="text-green-400">Paid</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            onClick={clearCart}
            className="
              flex items-center justify-center gap-2
              bg-orange-500 hover:bg-orange-400
              text-black font-semibold
              px-6 py-3 rounded-xl
              transition
            "
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="
              bg-gray-700 hover:bg-gray-600
              text-white font-semibold
              px-6 py-3 rounded-xl
              transition
            "
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;