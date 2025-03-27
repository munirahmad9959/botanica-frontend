// import React from 'react'

// const Navbar = () => {
//   return (
//     <header className='w-[80%] left-0 top-[48px] mx-auto backdrop-filter backdrop-blur-md bg-opacity-50'>
//       <div className="flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold"><img src="./resources/logo.png" alt="logo" /></div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search Plants..."
//               className="border border-[#3ca821] bg-white pl-4 pr-10 py-2 focus:outline-none text-[#797979] font-[400]" style={{ borderRadius: '0.65rem 1.5rem 1.5rem 0.65rem' }}
//             />
//             <span className="absolute right-[0.05rem] top-1/2 transform -translate-y-1/2 text-[#797979] flex items-center justify-center bg-[#5E9E4D] py-2 px-3" style={{ borderRadius: '1.5rem 1.5rem 1.5rem 1.5rem' }}>
//               <img src="./resources/search icon.png" alt="search icon" className="cursor-pointer w-full h-full" />
//             </span>
//           </div>
//           <div className="cursor-pointer flex items-center">
//             <img src="./resources/cart icon.png" alt="cart icon" className="cursor-pointer bg-[#5E9E4D] py-2 px-3 rounded-3xl" />
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="border-t border-[#1a7303] opacity-50" />

//       {/* Navigation Links */}
//       <div className="nav-links flex items-center justify-between px-6 py-4">
//         <nav className="flex justify-center space-x-6 py-2 text-[#000]">
//           <a href="#" className="text-gray-700 hover:text-green-600">
//             Home
//           </a>
//           <a href="/products" className="text-gray-700 hover:text-green-600">
//             Plants
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-600">
//             Plant Collection
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-600">
//             About
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-600">
//             Blog
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-600">
//             Contact
//           </a>
//         </nav>

//         <div className='flex items-center justify-center space-x-3 text-[#797979]'>
//           <span>Hi, User</span>
//           <span><img src="./resources/down-arrow.png" alt="down arrow" className='cursor-pointer' /></span>
//         </div>

//       </div>
//     </header>
//   )
// }

// export default Navbar


import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='w-[80%] left-0 top-[48px] mx-auto backdrop-filter backdrop-blur-md bg-opacity-50'>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold"><img src="./resources/logo.png" alt="logo" /></div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Plants..."
              className="border border-[#3ca821] bg-white pl-4 pr-10 py-2 focus:outline-none text-[#797979] font-[400]"
              style={{ borderRadius: '0.65rem 1.5rem 1.5rem 0.65rem' }}
            />
            <span className="absolute right-[0.05rem] top-1/2 transform -translate-y-1/2 text-[#797979] flex items-center justify-center bg-[#5E9E4D] py-2 px-3"
              style={{ borderRadius: '1.5rem 1.5rem 1.5rem 1.5rem' }}>
              <img src="./resources/search icon.png" alt="search icon" className="cursor-pointer w-full h-full" />
            </span>
          </div>
          <div className="cursor-pointer flex items-center">
            <img src="./resources/cart icon-1.png" alt="cart icon" className="cursor-pointer bg-[#5E9E4D] py-2 px-3 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#1a7303] opacity-50" />

      {/* Navigation Links */}
      <div className="nav-links flex items-center justify-between px-6 py-4">
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

        <div className='flex items-center justify-center space-x-3 text-[#797979]'>
          <span>Hi, User</span>
          <span><img src="./resources/down-arrow.png" alt="down arrow" className='cursor-pointer' /></span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
