import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCart from "../components/ProductCart";

function ProductList() {
    const {products}=useCart();
    
  return (
    <>
    <div className="container mx-auto px-4 py-6">
      <SearchFilter />
      <CategoryFilter/>
      <h2 className="text-white">Featured Gear({products.length})Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
        {
            products.map((product,index)=>(
                <ProductCart key={index} product={product}  />
            ))
        }
      </div>

    </div>
    </>
  );
}

export default ProductList;