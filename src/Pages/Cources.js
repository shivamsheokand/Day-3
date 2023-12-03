import React from 'react'
import RightArrow from '../assets/RightArrow.png'
const Cources = () => {
    return (
        <div className='bg-[#171717] flex flex-col h-screen'>
            <div className='flex justify-between p-4 mx-2'>
                <div className='uppercase text-white gap-2'>
                    <span className='text-7xl font-semibold'>Find</span>
                    <span className='text-2xl'>your course.</span>
                </div>
                <span className='text-white text-xl font-bold m-2 uppercase'>Edition <br />2023</span>
            </div>
            <div className='flex mb-12 mt-20 relative justify-evenly'>
                <div className='border-2 flex flex-col items-center justify-center w-[15%] p-5'>
                    <div className='flex gap-3 mt-2 '>
                    <h1 className='uppercase text-white font-semibold text-xl'>Course</h1>
                    <span className='uppercase font-bold text-[#aa84f9] text-xl'>01</span>
                    </div>
                    <span className='border-t-2 mr-5 mt-2 border-[#aa84f9] w-[40%]'> </span>
                    <div className='mt-2'>
                    <p className='text-white text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor elit.consectetur adipisicing elit</p>
                    </div>
                    <button className='bg-[#aa84f9] text-white rounded-sm py-1 px-2 mt-2'>Read More</button>

                    <div className='absolute top-0 left-24 '>
                        <span className='bg-white text-xl font-bold'>.01</span>
                    </div>
                </div>
                <div className='border-2 flex flex-col items-center justify-center w-[15%] p-5'>
                    <div className='flex gap-3 mt-2 '>
                    <h1 className='uppercase text-white font-semibold text-xl'>Course</h1>
                    <span className='uppercase font-bold text-[#aa84f9] text-xl'>02</span>
                    </div>
                    <span className='border-t-2 mr-5 mt-2 border-[#aa84f9] w-[40%]'> </span>
                    <div className='mt-2'>
                    <p className='text-white text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor elit.consectetur adipisicing elit</p>
                    </div>
                    <button className='bg-[#aa84f9] text-white rounded-sm py-1 px-2 mt-2'>Read More</button>

                    <div className='absolute top-0 left-42 -translate-x-18 '>
                        <span className='bg-white text-xl font-bold'>.02</span>
                    </div>
                </div>
                <div className='border-2 flex flex-col items-center justify-center w-[15%] p-5'>
                    <div className='flex gap-3 mt-2 '>
                    <h1 className='uppercase text-white font-semibold text-xl'>Course</h1>
                    <span className='uppercase font-bold text-[#aa84f9] text-xl'>03</span>
                    </div>
                    <span className='border-t-2 mr-5 mt-2 border-[#aa84f9] w-[40%]'> </span>
                    <div className='mt-2'>
                    <p className='text-white text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor elit.consectetur adipisicing elit</p>
                    </div>
                    <button className='bg-[#aa84f9] text-white rounded-sm py-1 px-2 mt-2'>Read More</button>

                    <div className='absolute top-0 right-42 -translate-x-18 '>
                        <span className='bg-white text-xl font-bold'>.03</span>
                    </div>
                </div>
                <div className='border-2 flex flex-col items-center justify-center w-[15%] p-5'>
                    <div className='flex gap-3 mt-2 '>
                    <h1 className='uppercase text-white font-semibold text-xl'>Course</h1>
                    <span className='uppercase font-bold text-[#aa84f9] text-xl'>04</span>
                    </div>
                    <span className='border-t-2 mr-5 mt-2 border-[#aa84f9] w-[40%]'> </span>
                    <div className='mt-2'>
                    <p className='text-white text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor elit.consectetur adipisicing elit</p>
                    </div>
                    <button className='bg-[#aa84f9] text-white rounded-sm py-1 px-2 mt-2'>Read More</button>

                    <div className='absolute top-0 right-42 -translate-x-18 '>
                        <span className='bg-white text-xl font-bold'>.04</span>
                    </div>
                </div>
                
            </div>
            <div className='flex justify-center items-center gap-4 mb-5'>
                <span className='text-white text-xl mb-1 uppercase'>more course</span>
                <img src={RightArrow} alt="" />
            </div>
        </div>
    )
}

export default Cources