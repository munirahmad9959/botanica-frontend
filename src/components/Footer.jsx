import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[#f8f8f8] py-10" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section - Logo & Description */}
                <div>
                    <img src="./resources/logo.png" alt="" />
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec eros ut nunc luctus consectetur.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex space-x-3 mt-4">
                        <Link to="#" className="bg-yellow-400 p-2 rounded-full">
                            <img src="./resources/twitter-fill.png" alt="Twitter" className="w-7" />
                        </Link>
                        <Link to="#" className="bg-yellow-400 p-2 rounded-full">
                            <img src="./resources/instagram-fill.png" alt="Instagram" className="w-7" />
                        </Link>
                        <Link to="#" className="bg-yellow-400 p-2 rounded-full">
                            <img src="./resources/facebook-circle-fill.png" alt="Facebook" className="w-7" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                        <li><Link to="#" className="hover:text-green-600">Home</Link></li>
                        <li><Link to="#" className="hover:text-green-600">Plant</Link></li>
                        <li><Link to="#" className="hover:text-green-600">Plant Collection</Link></li>
                        <li><Link to="#" className="hover:text-green-600">About</Link></li>
                        <li><Link to="#" className="hover:text-green-600">Blog</Link></li>
                        <li><Link to="#" className="hover:text-green-600">Contact</Link></li>
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                        <li><Link to="#" className="hover:text-green-600">Our Company</Link></li>
                        <li><Link to="#" className="hover:text-green-600">Privacy Policy</Link></li>
                        <li><Link to="#" className="hover:text-green-600">Product</Link></li>
                        <li><Link to="#" className="hover:text-green-600">How to buy</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <p className="mt-2 text-gray-600 flex items-center gap-2">
                        <img src="./resources/phone-fill.png" alt="" /> +211444222
                    </p>
                    <p className="mt-2 text-gray-600 flex items-center gap-2">
                        <img src="./resources/email-fill.png" alt="" /> botanica@garden.com
                    </p>
                    <p className="mt-2 text-gray-600">
                        Jendral Sudirman 111, Pahoman<br />
                        Bandar Botanica, Botanica
                    </p>
                </div>
            </div>

            {/* Separator Line */}
            <div className="w-[80%] mx-auto border-t border-gray-300 mt-10"></div>

            {/* Copyright */}
            <div className="text-center text-gray-600 text-base pt-4">
                © 2025, All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
