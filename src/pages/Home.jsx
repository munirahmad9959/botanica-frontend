import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'
import BelowHeroCards from '../components/Home/BelowHeroCards'
import Footer from '../components/Footer'
import TestimonialSection from '../components/Home/TestimonialSection'
import AboutSection from '../components/Home/AboutSection'
import BackgroundPlantsSection from '../components/Home/BackgroundPlantsSection'
import BlogSection from '../components/Home/BlogSection'

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
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <div className="relative w-full">
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
      <AboutSection />

      {/* Background plants section */}
      <BackgroundPlantsSection />

      {/* Blog background */}
      <BlogSection />
      
      {/* Testimonial Section */}

      <TestimonialSection />

      {/* Footer Section */}
      <Footer />

    </div>
  )

}

export default Home


