import { useCart } from "../../hooks/useCart";

const OrderSummary = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 50 ? 5 : 0;
  const total = subtotal - discount;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
      <h3 className="text-lg font-bold">Order Summary</h3>
      <div className="flex justify-between text-gray-700 mt-2">
        <span>Subtotal ({cart.length} items):</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-green-600 mt-2">
        <span>Saving:</span>
        <span>-${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-gray-700 mt-2">
        <span>Delivery:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between font-bold text-xl mt-4">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="w-full mt-4 p-3 bg-red-500 text-white rounded-lg">Proceed to Checkout</button>
    </div>
  );
};

export default OrderSummary;
