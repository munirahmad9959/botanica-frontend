import { useSelector, useDispatch } from 'react-redux';
import { 
    addToCart, 
    updateCartItemQuantity, 
    removeFromCart, 
    clearCart 
} from '../state';

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.auth.cart);

    return {
        cart,
        addToCart: (product) => dispatch(addToCart(product)),
        updateQuantity: (id, type) => dispatch(updateCartItemQuantity({ id, type })),
        removeItem: (id) => dispatch(removeFromCart(id)),
        clearCart: () => dispatch(clearCart())
    };
};