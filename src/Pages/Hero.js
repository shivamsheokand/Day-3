import React from 'react'
import img from '../assets/image-1.png'
const Hero = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex'>
                <div className='flex flex-col justify-items-start'>
                    <div className='translate-y-12 ml-8 '>
                        <span className='text-white text-8xl font-semibold'>UI</span>
                        <span className='text-[#a460f9] font-bold text-7xl'>.</span>
                    </div>
                    <div className='flex '>
                        <div className='mt-8 translate-y-16 absolute left-1 right-3/4 bottom-3 top-1/3'>
                            <span className='inline-block text-white origin-left-top transform -rotate-90 text-3xl uppercase font-mono'>Beginner's</span>
                        </div>
                        <div className='absolute translate-y-6 top-2/4 flex right-3/4'>
                            <span className='text-white relative left-0 right-8'>become  a <br />
                                pro-designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex items-center justify-center flex-col'>
                <div class="relative justify-center left-0 right-2/4">
                    <div class="w-48 h-48 bg-[#a460fa] rounded-full items-center translate-y-2 ">
                        <img className='absolute right-/4 left-0 top-2 bottom-12 h-[350px] resize -translate-y-16 translate-x-2  ' src={img} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className=' border-t-2 border-b-2 border-l-2 py-1 px-6 absolute right-1 top-1/4 '>
                    <span className='text-white'>
                        Edition <br /> 2023
                    </span>
                </div>
                <div className=''>
                    <div className='w-[20%] absolute right-3 top-2/4 -translate-x-40 -translate-y-14'>
                        <span className='text-lg text-white uppercase'>Start guide for biggner Designers</span>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quisquam maxime esse facilis debitis dolorem?</p>
                        <div className='flex gap-4 mt-3'>
                            <button className='bg-[#a460fa] py-1 px-2 text-white rounded-md' >Let's Start</button>
                            <button className='text-white'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='flex justify-evenly items-center translate-y-32'>
                    <div className='flex gap-2 items-center'>
                        <span className='text-[#a460fa] text-3xl font-bold '>+150</span>
                        <span className='text-white'>Happy <br/> STUDENTS</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='text-[#a460fa] text-3xl font-bold '>+50</span>
                        <span className='text-white'>Certified <br/> Courses</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='text-[#a460fa] text-3xl font-bold '>+1000</span>
                        <span className='text-white'>Awards <br/> Recievid</span>
                    </div>
                    
                </div>
            {/* Container End */}
        </div>
    )
}

export default Hero