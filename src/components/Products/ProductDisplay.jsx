import React from "react";

const featuredProducts = [
    { name: "Cherry", img: "/resources/featured-img1.png" },
    { name: "Basil", img: "/resources/featured-img2.png" },
    { name: "Strawberry", img: "/resources/featured-img3.png" },
    { name: "Climbing Plant", img: "/resources/featured-img4.png" },
];

const allProducts = [
    { name: "Thyme", price: "₨1,200.00", img: "/resources/product-img1.png" },
    { name: "Basil", price: "₨1,500.00", img: "/resources/product-img2.png" },
    { name: "Oregano", price: "₨1,350.00", img: "/resources/product-img3.png" },
    { name: "Camellia Sinensis", price: "₨1,800.00", img: "/resources/product-img4.png" },
    { name: "Cherry", price: "₨2,200.00", img: "/resources/product-img5.png" },
    { name: "Beetroot", price: "₨1,650.00", img: "/resources/product-img6.png" },
    { name: "Lemon", price: "₨2,500.00", img: "/resources/product-img7.png" },
    { name: "Fig", price: "₨2,000.00", img: "/resources/product-img8.png" },
    { name: "Grapes", price: "₨2,000.00", img: "/resources/product-img9.png" },
    { name: "Strawberry", price: "₨2,000.00", img: "/resources/product-img10.png" },
    { name: "Philodendron", price: "₨2,000.00", img: "/resources/product-img11.png" },
    { name: "Pothos", price: "₨2,000.00", img: "/resources/product-img12.png" },
    { name: "Faux", price: "₨2,000.00", img: "/resources/product-img13.png" },
    { name: "Anthurium", price: "₨2,000.00", img: "/resources/product-img14.png" },
    { name: "Philodendron", price: "₨2,000.00", img: "/resources/product-img11.png" },
    { name: "Ficus Lyrata", price: "₨2,000.00", img: "/resources/product-img15.png" },
];

const ProductDisplay = () => {
    return (
        <div className="w-full px-24 py-8">
            {/* Featured Products Section */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Featured Product</h2>
                    <a href="#" className="text-[#305027] text-base hover:underline">See all</a>
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
                    <a href="#" className="text-[#305027] text-base hover:underline">See all</a>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {allProducts.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                            <img src={product.img} alt={product.name} className="w-full object-cover rounded-md" />
                            <h3 className="my-2 text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.price}</p>
                            <button className="mt-4 w-full bg-[#5e9e4d] text-white py-2 rounded-md hover:bg-[#548e45] cursor-pointer">
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
