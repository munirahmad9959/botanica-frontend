import { useCart } from "../../hooks/useCart";
import { FiX } from "react-icons/fi";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between gap-6 border-b py-4">
      {/* Image and Name */}
      <div className="flex items-center gap-4 flex-1">
        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
        <h3 className="text-lg font-semibold">{item.name}</h3>
      </div>

      {/* Individual Price */}
      <p className="font-medium text-gray-700">${item.price.toFixed(2)}</p>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, "decrease")}
          className="px-3 py-1 border rounded hover:bg-gray-200"
        >
          −
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, "increase")}
          className="px-3 py-1 border rounded hover:bg-gray-200"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>

      {/* Remove Button */}
      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
        <FiX size={20} />
      </button>
    </div>
  );
};

export default CartItem;

