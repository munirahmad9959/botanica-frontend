import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BlogSection = () => {
    return (
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

    )
}

export default BlogSection
