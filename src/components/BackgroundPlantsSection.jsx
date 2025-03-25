import React from 'react'

const BackgroundPlantsSection = () => {
    return (
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

    )
}

export default BackgroundPlantsSection
