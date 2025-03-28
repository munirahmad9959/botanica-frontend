import React, { useEffect } from 'react'
import ProductsNavbar from '../components/Products/ProductsNavbar'
import ProductsHeroSection from '../components/Products/ProductsHeroSection'
import Categories from '../components/Products/Categories'
import ProductDisplay from '../components/Products/ProductDisplay'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../state'
import Loader from '../components/Loader'

const Products = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    useEffect(() => {
        dispatch(setLoading(true));

        const timeout = setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);

        return () => clearTimeout(timeout);
    }, [dispatch]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="w-full overflow-hidden" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <ProductsNavbar />
            <ProductsHeroSection />
            <div className="w-full flex justify-center">
                <Categories />
            </div>
            <ProductDisplay />

            <Footer />
        </div>
    )
}

export default Products;
