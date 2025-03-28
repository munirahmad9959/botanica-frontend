import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Added missing imports
import ProductsNavbar from "../components/Products/ProductsNavbar";
import CartItem from "../components/ShoppingCart/CartItem";
import DeliveryOptions from "../components/ShoppingCart/DeliveryOptions";
import OrderSummary from "../components/ShoppingCart/OrderSummary";
import { useCart } from "../hooks/useCart";
import Loader from "../components/Loader"; // Assuming you have a Loader component
import { setLoading } from "../state/index"; 

const ShoppingCart = () => {
  const dispatch = useDispatch(); // Added missing dispatch
  const loading = useSelector((state) => state.auth.loading);
  const { cart } = useCart();

  useEffect(() => {
    dispatch(setLoading(true));

    const timeout = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500); // Simulating loading time

    return () => clearTimeout(timeout);
  }, [dispatch]);

  useEffect(() => {
    console.log("Cart contents:", cart);
  }, [cart]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ProductsNavbar />
      <div className="flex justify-center items-start p-6 bg-gray-50 min-h-screen">
        {/* Left Side */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <DeliveryOptions />
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <p className="text-center py-8">Your cart is empty</p>
          )}
        </div>

        {/* Right Side */}
        <div className="w-1/3 pl-6">
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;