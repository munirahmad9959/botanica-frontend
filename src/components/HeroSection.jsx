import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroSection = () => {
    return (
        <div className="w-full mt-[20rem] flex justify-between">
            <div className="content w-[40%] ml-32" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
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
                <div className="buttons mt-16 flex gap-7">
                    <button className="btn px-5 py-3 bg-black text-white text-lg rounded-4xl flex items-center gap-2">
                        <span>Shop Plant</span>
                        <FaArrowRightLong className='text-white' />
                    </button>
                    <button className="btn px-5 py-3 bg-white text-black text-lg border border-black rounded-4xl">About Us</button>
                </div>
            </div>

            <div className="right mr-32 mt-16 w-[40%] relative p-4 rounded-lg">
                <div className="container bg-[#ebebeb] rounded-lg mt-10 w-full p-4 shadow-md hover:shadow-xl transition-shadow">
                    <div className="content flex items-center justify-between">
                        <span className="w-[80%]">
                            <h1 className="text-xl font-semibold text-gray-800">Section 1</h1>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.</p>
                        </span>
                        <img src="./resources/section1.png" alt="" className="w-16 h-16 object-cover rounded-md" />
                    </div>
                </div>

                <div className="second-container flex items-center gap-3 mt-7">
                    <div className="container bg-[#ebebeb] rounded-lg w-[50%] p-4 shadow-md hover:shadow-xl transition-shadow">
                        <div className="content flex items-center justify-between">
                            <span className="w-[50%]">
                                <h1 className="text-xl font-semibold text-gray-800">Section 2</h1>
                                <p className="text-gray-600">Lorem ipsum dolor.</p>
                            </span>
                            <img src="./resources/section2.png" alt="" className="w-14 h-14 object-cover rounded-md" />
                        </div>
                    </div>

                    <div className="container bg-[#ebebeb] rounded-lg w-[50%] p-4 shadow-md hover:shadow-xl transition-shadow">
                        <div className="content flex items-center justify-between">
                            <span className="w-[50%]">
                                <h1 className="text-xl font-semibold text-gray-800">Section 3</h1>
                                <p className="text-gray-600">Lorem ipsum dolor.</p>
                            </span>
                            <img src="./resources/section3.png" alt="" className="w-14 h-14 object-cover rounded-md" />
                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default HeroSection