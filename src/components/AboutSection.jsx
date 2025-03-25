import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const AboutSection = () => {
    return (
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

    )
}

export default AboutSection
