import React from 'react'
import { NavLink } from 'react-router-dom'


const ProductsNavbar = () => {
    return (
        <header className='w-full px-12 left-0 top-[48px] mx-auto '>
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <img src="./resources/logo.png" alt="logo" />
                </div>

                {/* Navigation Links */}
                <nav className="flex justify-center space-x-10 py-2 text-[#000]">
                    <NavLink to="/" className={({ isActive }) =>
                        `text-gray-700 hover:text-green-600 relative ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-green-600" : ""}`
                    }>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) =>
                        `text-gray-700 hover:text-green-600 relative ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-green-600" : ""}`
                    }>
                        Plants
                    </NavLink>
                    <NavLink to="/collection" className={({ isActive }) =>
                        `text-gray-700 hover:text-green-600 relative ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-green-600" : ""}`
                    }>
                        Plant Collection
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        `text-gray-700 hover:text-green-600 relative ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-green-600" : ""}`
                    }>
                        About
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) =>
                        `text-gray-700 hover:text-green-600 relative ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-green-600" : ""}`
                    }>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        `text-gray-700 hover:text-green-600 relative ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-green-600" : ""}`
                    }>
                        Contact
                    </NavLink>
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <div className="cursor-pointer flex items-center">
                        <img src="./resources/cart icon.png" alt="cart icon" className="cursor-pointer bg-[#5E9E4D] py-2 px-3 rounded-3xl" />
                    </div>
                    <div className="cursor-pointer flex items-center text-[#797979]">
                        <img src="./resources/person-outline.png" alt="account" className="cursor-pointer bg-[#5E9E4D] py-2 px-3 rounded-3xl" />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default ProductsNavbar
