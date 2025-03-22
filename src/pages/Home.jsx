import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className='overflow-x-hidden h-screen w-screen relative'>
      <div
        className='h-[50rem] relative overflow-y-auto'
        style={{
          backgroundImage: 'url(./resources/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 w-screen">
          <HeroSection />
        </div>
      </div>
    </div>
  )

}


export default Home

// <div className="overflow-x-hidden w-screen relative min-h-screen">
//   <div
//     className="absolute top-0 left-0 w-full h-full"
//     style={{
//       backgroundImage: 'url(./resources/hero-background.png)',
//       backgroundSize: 'cover',
//       backgroundPosition: 'top center',
//     }}
//   >
//     <div className="absolute top-0 left-0 w-full">
//       <Navbar />
//     </div>
//     <div className="absolute top-0 left-0 w-full">
//       <HeroSection />
//     </div>
//   </div>
// </div>

// import React from 'react'
// import Navbar from '../components/Navbar'
// import HeroSection from '../components/HeroSection'

// const Home = () => {
//   return (

//     <div className="bg-image w-screen h-screen"
//     style={{
//       backgroundImage: 'url(/resources/hero-background.png)',
//       backgroundSize: 'cover',
//       backgroundPosition: 'top center',
//       width: 'full',
//       height: 'full',
//     }}>

//     </div >
//   )
// }

// export default Home


