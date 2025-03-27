import React from 'react'

const ProductsHeroSection = () => {
    return (
        <div className='w-full flex justify-center items-center relative' style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            <img src="./resources/products-hero-section.png" alt="" />
            <div className="content absolute flex flex-col items-center space-y-4 text-center">
                <h1 className='text-6xl font-semibold text-black w-[55rem]'>
                    Discover Source of Green Spaces, Where Nature Thrives
                </h1>
                <p className='text-center w-[37rem] text-lg'>Immerse yourself in a world of lush greenery and vibrant life as you explore our diverse selection of plants and trees.</p>
                <button className='btn px-10 py-4 bg-black hover:bg-[#2d2d2d] text-white text-lg rounded-4xl flex items-center gap-2 cursor-pointer'>Contact Us</button>
            </div>

        </div>
    )
}

export default ProductsHeroSection
