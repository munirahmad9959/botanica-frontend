import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BelowHeroCards from '../components/BelowHeroCards'
import { FaArrowRightLong } from 'react-icons/fa6'

const Home = () => {
  return (
    <div className='overflow-x-hidden h-screen w-screen relative' style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <div
        className='h-[50rem] relative overflow-y-auto'
        style={{
          backgroundImage: 'url(./resources/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 w-full">
          <HeroSection />
        </div>
      </div>
      {/* section below hero */}

      <div
        className='h-[45rem] relative overflow-y-auto flex justify-center'
        style={{
          backgroundImage: 'url(./resources/below-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>

        <div className="absolute mt-20 text-center ml-36">
          <div className="content w-[45rem]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            <h1 className='text-6xl font-semibold text-white'>
              BEST SELLING <br /> plant Collections{' '}
              <img
                src="./resources/tree2-removebg-preview.png"
                alt="tree pic"
                className="inline-block w-12 h-12 align-middle"
              />
            </h1>
            <p className='text-white text-2xl mt-3'>Check out our collections, we got every plant you need  here!
              Let&apos;s grow it together!</p>
          </div>
          <BelowHeroCards />
        </div>

      </div>

      {/* About Section */}
      <div
        className='h-[45rem] relative overflow-y-auto flex justify-center'
        style={{
          backgroundImage: 'url(./resources/about-section.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}>

        <div className="content absolute top-[8rem] right-[3.5rem]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          <h1 className='text-6xl font-semibold text-black'>What&apos;s Best From<br /> Our <span className='text-[#3a632f]'>Plants</span></h1>
          <p className='mt-7 w-[400px] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec eros ut nunc luctus consectetur vel ac justo. Donec vulputate orci ut mi sodales finibus. Aliquam placerat ligula eget orci porttitor tincidunt. Sed a ligula id orci ultricies posuere nec sit amet erat.</p>
          <div className="buttons mt-16 flex gap-7">
            <button className="btn px-10 py-4 bg-black text-white text-lg rounded-4xl flex items-center gap-2 cursor-pointer">
              <span>Shop Plant</span>
              <FaArrowRightLong className='text-white' />
            </button>
            <button className="btn px-10 py-4 bg-white text-black text-lg border border-black rounded-4xl cursor-pointer">READ MORE</button>
          </div>

        </div>

      </div>

      {/* Background plants section */}
      <div
        className="h-[24rem] relative overflow-y-auto flex items-center justify-between px-10 text-white"
        style={{
          backgroundImage: 'url(./resources/background-plants.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          fontFamily: "'Bricolage Grotesque', sans-serif"
        }}
      >
        {/* Left Section - Heading */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold">Start Gardening and Grow Your Own Plant!</h1>
        </div>

        {/* Center Section - Image */}
        <div className="relative">
          <img
            src="./resources/large plant-background-plants.png"
            alt="Plants"
            className="w-50 h-50 rounded-full border-4 border-white"
          />
          <img
            src="./resources/small plant-background-plants.png"
            alt="Small Plant"
            className="absolute bottom-3 left-[-30px] w-20 h-20 rounded-full border-2 border-white"
          />
        </div>

        {/* Right Section - Paragraph and Button */}
        <div className="max-w-sm ">
          <p className="text-2xl mb-7 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn px-10 py-4 bg-white text-black text-lg border border-black rounded-4xl cursor-pointer">READ MORE</button>

        </div>
      </div>

      {/* Blog background */}
      <div
        className="h-[46rem] relative overflow-y-auto flex items-center justify-between px-10 text-white"
        style={{
          backgroundImage: 'url(./resources/blog-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          fontFamily: "'Bricolage Grotesque', sans-serif"
        }}
      >
        <div className='flex justify-between gap-10 mt-[5.3rem] ml-20 items-center'>
          <div className="content max-w-xl text-black ">
            <h1 className='text-6xl font-bold'>Know More About  Houseplant</h1>
            <p className='w-[500px] text-2xl mt-7 text-[#1e1e1e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec eros ut nunc luctus consectetur vel ac justo. Donec vulputate orci ut mi sodales finibus.</p>
            <div className="buttons mt-24 ml-5 flex gap-7">
              <button className="btn px-10 py-4 bg-black text-white text-lg rounded-4xl flex items-center gap-2">
                <span>Our Blog</span>
                <FaArrowRightLong className='text-white' />
              </button>
              <button className="btn px-10 py-4 bg-white text-black text-lg border border-black rounded-4xl">Read More</button>
            </div>


          </div>
          <div className="img mt-10">
            <img src="./resources/blog-plant section.png" alt="" className='w-122' />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}

      <div
        className="h-[53rem] relative overflow-y-auto flex items-center justify-between px-10 text-white"
        style={{
          backgroundImage: 'url(./resources/testimonial-section.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          fontFamily: "'Bricolage Grotesque', sans-serif"
        }}
      >
        <div className="content absolute top-20 right-[12rem] flex justify-center items-center flex-col mr-[4.5rem]">
          <h1 className='text-6xl font-semibold text-white text-center'>
            WHAT THEY SAY <br /> Reviews{' '}
            <img
              src="./resources/comment-img-removebg-preview.png"
              alt="tree pic"
              className="inline-block w-12 h-12 align-middle"
            />
          </h1>
          <p className='text-lg mt-7 text-center w-[520px] '>Check out our collections, we got every plant you need  here! Let&apos;s grow it together!</p>

          <div className="cards flex gap-14 mt-32">
            <div className='w-64 h-[22rem] bg-[#f8f8f8] relative' style={{ borderRadius: "48% 51% 10% 10% / 19% 21% 7% 8% " }}>
              <div className="img absolute top-[-54px] left-16">
                <img src="./resources/testimonial-pic1.png" className='w-30' alt="" />
              </div>
              <div className="content absolute top-16 left-7 text-black flex flex-col items-center gap-y-1.5">
                <h1>Bradley</h1>
                <img src="./resources/full-star-rating.png" alt="" />
                <div className="w-[200px] border-t-2 border-[#d9d9d9] my-4"></div>
                <p className='w-[180px] text-base text-center font-normal text-[#1e1e1e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis voluptatum optio voluptatibus.</p>
              </div>
            </div>

            <div className='w-64 h-[22rem] bg-[#f8f8f8] relative' style={{ borderRadius: "48% 51% 10% 10% / 19% 21% 7% 8% " }}>
              <div className="img absolute top-[-54px] left-16">
                <img src="./resources/testimonial-pic2.png" className='w-30' alt="" />
              </div>
              <div className="content absolute top-16 left-7 text-black flex flex-col items-center gap-y-1.5">
                <h1>Bradley</h1>
                <img src="./resources/full-star-rating.png" alt="" />
                <div className="w-[200px] border-t-2 border-[#d9d9d9] my-4"></div>
                <p className='w-[180px] text-base text-center font-normal text-[#1e1e1e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis voluptatum optio voluptatibus.</p>
              </div>
            </div>

            <div className='w-64 h-[22rem] bg-[#f8f8f8] relative' style={{ borderRadius: "48% 51% 10% 10% / 19% 21% 7% 8% " }}>
              <div className="img absolute top-[-54px] left-16">
                <img src="./resources/testimonial-pic3.png" className='w-30' alt="" />
              </div>
              <div className="content absolute top-16 left-7 text-black flex flex-col items-center gap-y-1.5">
                <h1>Bradley</h1>
                <img src="./resources/four-star-rating.png" alt="" />
                <div className="w-[200px] border-t-2 border-[#d9d9d9] my-4"></div>
                <p className='w-[180px] text-base text-center font-normal text-[#1e1e1e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis voluptatum optio voluptatibus.</p>
              </div>
            </div>

          </div>

        </div>


      </div>

      {/* Footer Section */}
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
              <a href="#" className="bg-yellow-400 p-2 rounded-full">
                <img src="./resources/twitter-fill.png" alt="Twitter" className="w-7" />
              </a>
              <a href="#" className="bg-yellow-400 p-2 rounded-full">
                <img src="./resources/instagram-fill.png" alt="Instagram" className="w-7" />
              </a>
              <a href="#" className="bg-yellow-400 p-2 rounded-full">
                <img src="./resources/facebook-circle-fill.png" alt="Facebook" className="w-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-green-600">Home</a></li>
              <li><a href="#" className="hover:text-green-600">Plant</a></li>
              <li><a href="#" className="hover:text-green-600">Plant Collection</a></li>
              <li><a href="#" className="hover:text-green-600">About</a></li>
              <li><a href="#" className="hover:text-green-600">Blog</a></li>
              <li><a href="#" className="hover:text-green-600">Contact</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-green-600">Our Company</a></li>
              <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600">Product</a></li>
              <li><a href="#" className="hover:text-green-600">How to buy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-gray-600 flex items-center gap-2">
              <img src="./resources/phone-fill.png" alt="" /> +211444222
            </p>
            <p className="mt-2 text-gray-600 flex items-center gap-2">
              <img src="./resources/email-fill.png" alt="" /> lampunggardening@garden.com
            </p>
            <p className="mt-2 text-gray-600">
              Jendral Sudirman 111, Pahoman<br />
              Bandar Lampung, Lampung
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-[80%] mx-auto border-t border-gray-300 mt-10"></div>

        {/* Copyright */}
        <div className="text-left ml-[8.5rem] text-gray-600 text-sm py-4 mt-5">
          © 2023, All Rights Reserved.
        </div>
      </footer>

    </div>
  )

}

export default Home


