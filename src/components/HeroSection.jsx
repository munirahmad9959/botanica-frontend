import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroSection = () => {
    return (
        // <div className='w-screen'>
        //     <div className="content w-[40%] ml-32 mt-64 font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
        //         <h1 className='text-6xl'>
        //             <span className='text-black font-semibold'>Make Your Space </span>
        //             <div className="flex items-center gap-4">
        //                 <span className="text-8xl text-[#3a632f] font-extrabold">
        //                     Greener
        //                 </span>

        //                 <img src="./resources/plant.png" alt="plant pic" className='w-[75px]' />
        //             </div>

        //             <span className='font-semibold'>With <span className="text-[#a85013]">Plants</span></span></h1>

        //         <p className="text-gray-600 text-lg mt-2 italic">"Breathe life into your space, one plant at a time."</p>
        //     </div>

        //     <div className="buttons mt-7 ml-32 flex gap-7">

        //         <button className="btn px-5 py-3 bg-black text-white text-lg rounded-4xl flex items-center gap-2">
        //             <span>Shop Plant</span>
        //             <FaArrowRightLong className='text-white' />
        //         </button>

        //         <button className="btn px-5 py-3 bg-white text-black text-lg border border-black rounded-4xl">About Us</button>
        //     </div>

        // </div>

        <div className="w-screen">
            <div className="content w-[40%] ml-28 mt-[20rem] font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                <h1 className='text-6xl'>
                    <span className='text-black font-semibold'>Make Your Space </span>
                    <div className="flex items-center gap-4">
                        <span className="text-8xl text-[#3a632f] font-extrabold">
                            Greener
                        </span>

                        <img src="./resources/plant.png" alt="plant pic" className='w-[75px]' />
                    </div>

                    <span className='font-semibold'>With <span className="text-[#a85013]">Plants</span></span>
                </h1>

                <p className="text-gray-600 text-lg mt-7 italic">"Breathe life into your space, one plant at a time."</p>
            </div>

            {/* Wrap the buttons in a separate div */}
            <div className="buttons mt-16 ml-28 flex gap-7">
                <button className="btn px-5 py-3 bg-black text-white text-lg rounded-4xl flex items-center gap-2">
                    <span>Shop Plant</span>
                    <FaArrowRightLong className='text-white' />
                </button>

                <button className="btn px-5 py-3 bg-white text-black text-lg border border-black rounded-4xl">About Us</button>
            </div>
        </div>

    )
}

export default HeroSection