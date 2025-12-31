import { useState, useEffect } from "react";
import { initialProducts } from "../components/data/product";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {cart,addToCart,cartCount,cartPrice}=useCart();



  console.log(cartCount);
  console.log(cartPrice);


  useEffect(() => {
    const foundProduct = initialProducts.find(
      (data) => data.id === Number(id)
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p className="text-white">Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6 text-white">
      
      <Link to="/">
        <button className="mb-4 underline">← Back to home</button>
      </Link>

      {/* Main layout */}
      <div className="flex gap-6">
        
        {/* Left: Image */}
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full"
          />
        </div>

        {/* Right: Product info */}
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg mb-2">₹{product.price}</p>
          <p>{product.description}</p>
        </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-orange-500 text-black font-semibold
                         py-3 rounded-xl hover:bg-orange-400 transition cursor-pointer"
            >
              Add to Cart
            </button>


      </div>
    </div>
  );
}


export default ProductDetails;