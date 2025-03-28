import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    isLoggedIn: false,
    role: null,
    loading: false,
    isSessionExpired: false,
    cart: [], // Add cart to initial state
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = Boolean(action.payload.user);
            state.role = action.payload.user.role;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
            state.role = null;
            state.cart = []; // Clear cart on logout
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setSessionExpired(state, action) {
            state.isSessionExpired = action.payload;
        },
        // Cart-related reducers
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cart.find(item => item.id === product.id);
            
            // Parse price safely
            const numericPrice = product.price.replace(/[^\d.]/g, '');
            const priceValue = parseFloat(numericPrice);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({
                    ...product,
                    quantity: 1,
                    price: priceValue,
                    image: product.img || '/resources/default-product.png'
                });
            }
        },
        updateCartItemQuantity: (state, action) => {
            const { id, type } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
                item.quantity = type === "increase" 
                    ? item.quantity + 1 
                    : Math.max(1, item.quantity - 1);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

// Export all actions including cart-related ones
export const { 
    setMode, 
    setLogin, 
    setLogout, 
    setLoading, 
    setSessionExpired,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    clearCart
} = authSlice.actions;

// Export reducer
export default authSlice.reducer;