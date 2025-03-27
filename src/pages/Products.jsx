// import React from 'react'
// import ProductsNavbar from '../components/Products/ProductsNavbar'
// import ProductsHeroSection from '../components/Products/ProductsHeroSection'
// import Categories from '../components/Products/Categories'

// const Products = () => {
//     return (
//         <>
//             <div className='overflow-x-hidden w-screen' style={{ scrollbarWidth: "none", msOverflowStyle: "none", fontFamily: "'Bricolage Grotesque', sans-serif" }}>

//                 <ProductsNavbar />
//             </div>
//             <ProductsHeroSection />
//             <Categories />
//         </>
//     )
// }

// export default Products

import React from 'react'
import ProductsNavbar from '../components/Products/ProductsNavbar'
import ProductsHeroSection from '../components/Products/ProductsHeroSection'
import Categories from '../components/Products/Categories'
import ProductDisplay from '../components/Products/ProductDisplay'
import Footer from '../components/Footer'

const Products = () => {
    return (
        <div className="w-full overflow-hidden" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <ProductsNavbar />
            <ProductsHeroSection />
            <div className="w-full flex justify-center">
                <Categories />
            </div>
            <ProductDisplay />

            <Footer/>
        </div>
    )
}

export default Products;
