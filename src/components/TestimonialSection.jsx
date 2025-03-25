import React from 'react'

const TestimonialSection = () => {
    return (
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
    )
}

export default TestimonialSection
