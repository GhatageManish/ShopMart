import React, { useState } from "react";
import { Package, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartPrice } = useCart();

  const [delivery, setDelivery] = useState({
    Name: "",
    Address: "",
    City: "",
    Zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDelivery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">
      <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
        Finalize Order
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Shipping Form */}
        <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
          <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center gap-3 border-b border-gray-700 pb-4">
            <MapPin />
            Shipping Information
          </h3>

          <form className="space-y-6">
            {Object.keys(delivery).map((field) => (
              <div key={field} className="flex flex-col gap-1">
                <label htmlFor={field} className="text-white font-medium">
                  {field === "Zip" ? "Pin Code" : field}
                </label>

                <input
                  id={field}
                  name={field}
                  type={field === "Zip" ? "number" : "text"}
                  value={delivery[field]}
                  onChange={handleChange}
                  required
                  className="
                    px-5 py-3
                    rounded-xl
                    border border-gray-700
                    bg-gray-800
                    text-white
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-500
                  "
                />
              </div>
            ))}

            <Link to={'/order-confirm'}
              type="submit"
              className="
                w-full mt-8
                bg-orange-500 hover:bg-orange-400
                text-black font-bold
                py-4 rounded-xl
                transition
              "
            >
              Pay & Continue (₹{cartPrice})
            </Link>
          </form>
        </div>

        {/* Order Summary */}
        <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 h-fit">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Package />
            Order Summary
          </h3>

          <div className="flex justify-between text-gray-300 text-lg">
            <span>Total</span>
            <span className="font-semibold">₹{cartPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;