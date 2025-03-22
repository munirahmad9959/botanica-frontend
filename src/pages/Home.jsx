import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className='overflow-x-hidden w-screen h-screen relative'>
      <div
        className='h-screen'
        style={{
          backgroundImage: 'url(./resources/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          height: '100vh',
        }}
      >
        <Navbar />
      </div>
      <div className="">
        <HeroSection />
      </div>

    </div>

  )
}

{/* <div className='overflow-x-hidden w-screen h-screen relative'>
<div
  className='h-screen relative'
  style={{
    backgroundImage: 'url(./resources/hero-background.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '100vh',
  }}
>
  <div className="absolute top-0 left-0 w-full">
    <Navbar />
  </div>
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <HeroSection />
  </div>
</div>
</div>
 */}

export default Home
