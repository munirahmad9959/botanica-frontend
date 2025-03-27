import React from 'react'

const BelowHeroCards = () => {
    return (
        <div className="cards flex gap-14">
            <div className="w-64 h-96 bg-[#d9d9d9] shadow-lg relative"
                style={{ borderRadius: "47% 51% 10% 10% / 35% 33% 0% 0% " }}>
                <div className="flex flex-col">
                    <div className="img flex justify-center h-48 bg-[#ffc973]" style={{ borderRadius: "52% 55% 0% 0% / 65% 65% 0% 0% " }}>
                        <img src="./resources/plant3 2.png" alt="plant pic" className='w-45 h-45 absolute top-2' />
                    </div>
                    <div className="content mt-3">
                        <h1 className='text-2xl font-semibold' style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Plant 1</h1>
                        <p className='text-[#000] font-light mt-1 text-left px-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt.</p>
                        <span className='font-extrabold text-xl' style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>$20,00</span>
                    </div>
                </div>
                <div className="absolute button px-20 py-3 bg-black rounded-3xl mt-4 left-4 text-white" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Buy now</div>
            </div>

            <div className="w-64 h-96 bg-[#d9d9d9] shadow-lg relative"
                style={{ borderRadius: "47% 51% 10% 10% / 35% 33% 0% 0% " }}>
                <div className="flex flex-col">
                    <div className="img flex justify-center h-48 bg-[#80ca6c]" style={{ borderRadius: "52% 55% 0% 0% / 65% 65% 0% 0% " }}>
                        <img src="./resources/plant3 4.png" alt="plant pic" className='w-45 h-45 absolute top-2' />
                    </div>
                    <div className="content mt-3">
                        <h1 className='text-2xl font-semibold' style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Plant 1</h1>
                        <p className='text-[#000] font-light mt-1 text-left px-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt.</p>
                        <span className='font-extrabold text-xl' style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>$20,00</span>
                    </div>
                </div>
                <div className="absolute button px-20 py-3 bg-black rounded-3xl mt-4 left-4 text-white" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Buy now</div>
            </div>

            <div className="w-64 h-96 bg-[#d9d9d9] shadow-lg relative"
                style={{ borderRadius: "47% 51% 10% 10% / 35% 33% 0% 0% " }}>
                <div className="flex flex-col">
                    <div className="img flex justify-center h-48 bg-[#ffc973]" style={{ borderRadius: "52% 55% 0% 0% / 65% 65% 0% 0% " }}>
                        <img src="./resources/plant3 3.png" alt="plant pic" className='w-45 h-45 absolute top-2' />
                    </div>
                    <div className="content mt-3">
                        <h1 className='text-2xl font-semibold' style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Plant 1</h1>
                        <p className='text-[#000] font-light mt-1 text-left px-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sunt.</p>
                        <span className='font-extrabold text-xl' style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>$20,00</span>
                    </div>
                </div>
                <div className="absolute button px-20 py-3 bg-black rounded-3xl mt-4 left-4 text-white" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Buy now</div>
            </div>
        </div>

    )
}

export default BelowHeroCards
