import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

const featuredProducts = [
    { name: "Cherry", img: "/resources/featured-img1.png" },
    { name: "Basil", img: "/resources/featured-img2.png" },
    { name: "Strawberry", img: "/resources/featured-img3.png" },
    { name: "Climbing Plant", img: "/resources/featured-img4.png" },
];

const allProducts = [
    { id: 1, name: "Thyme", price: "$12.00", img: "/resources/product-img1.png" },
    { id: 2, name: "Basil", price: "$15.00", img: "/resources/product-img2.png" },
    { id: 3, name: "Oregano", price: "$13.50", img: "/resources/product-img3.png" },
    { id: 4, name: "Camellia Sinensis", price: "$18.00", img: "/resources/product-img4.png" },
    { id: 5, name: "Cherry", price: "$22.00", img: "/resources/product-img5.png" },
    { id: 6, name: "Beetroot", price: "$16.50", img: "/resources/product-img6.png" },
    { id: 7, name: "Lemon", price: "$25.00", img: "/resources/product-img7.png" },
    { id: 8, name: "Fig", price: "$20.00", img: "/resources/product-img8.png" },
    { id: 9, name: "Grapes", price: "$20.00", img: "/resources/product-img9.png" },
    { id: 10, name: "Strawberry", price: "$20.00", img: "/resources/product-img10.png" },
    { id: 11, name: "Philodendron", price: "$20.00", img: "/resources/product-img11.png" },
    { id: 12, name: "Pothos", price: "$20.00", img: "/resources/product-img12.png" },
    { id: 13, name: "Faux", price: "$20.00", img: "/resources/product-img13.png" },
    { id: 14, name: "Anthurium", price: "$20.00", img: "/resources/product-img14.png" },
    { id: 15, name: "Philodendron", price: "$20.00", img: "/resources/product-img11.png" },
    { id: 16, name: "Ficus Lyrata", price: "$20.00", img: "/resources/product-img15.png" },
];

const ProductDisplay = () => {
    const { addToCart, cart } = useCart();
    const [notification, setNotification] = useState("");
    console.log("Current cart in ProductDisplay:", cart);

    const AddToCart = (product) => {
        addToCart(product);
        setNotification(`${product.name} added to cart successfully!`);

        // Hide message after 3 seconds
        setTimeout(() => {
            setNotification("");
        }, 3000);
    };

    return (
        <div className="w-full px-24 py-8 relative">
            {/* Notification Message */}
            {notification && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-md shadow-lg transition-opacity duration-500">
                    {notification}
                </div>
            )}

            {/* Featured Products Section */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Featured Product</h2>
                    <Link to="#" className="text-[#305027] text-base hover:underline">See all</Link>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {featuredProducts.map((product, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                            <img src={product.img} alt={product.name} className="w-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* All Products Section */}
            <div className="mt-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">All Products</h2>
                    <Link to="#" className="text-[#305027] text-base hover:underline">See all</Link>
                </div>

                <div className="grid grid-cols-4 gap-6">
                    {allProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 text-center">
                            <img src={product.img} alt={product.name} className="w-full object-cover rounded-md" />
                            <h3 className="my-2 text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.price}</p>
                            <button
                                onClick={() => AddToCart(product)}
                                className="mt-4 w-full bg-[#5e9e4d] text-white py-2 rounded-md hover:bg-[#548e45] cursor-pointer"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
