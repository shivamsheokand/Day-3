import React from 'react'
import Ovel from '../assets/Oval1.png'
import img2 from '../assets/img2.png'
import Ovel2 from '../assets/Oval2.png'
const About = () => {
    return (
        <div className='flex  justify-center items-center bg-[#171717] h-screen relative '>
            <div className=' relative mt-4 mb-14 h-screen'>
                <img className='w-[150px] resize' src={Ovel} alt="" />
                <div class="w-4 h-4 bg-[#a460fa] rounded-full absolute -top-1 left-28 "></div>


                <div className='flex flex-col ml-20 '>
                    <div className='flex items-center gap-1'>
                        <h1 className='text-5xl text-white font-semibold'>About</h1>
                        <p className='text-2xl text-[#aa84f9] font-mono mt-6'>Us.</p>
                    </div>
                    <p className='text-white w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga laudantium incidunt aperiam molestias ullam officiis eveniet cum earum nisi pariatur vero, modi qui harum magnam, repellendus beatae. Id, accusantium.</p>
                    <div className='w-[35%] flex flex-col text-white mt-8'>
                        <div className='flex justify-between items-center'>
                            <span>Hello world</span>
                            <span> Hello world</span>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <span>Hello world</span>
                            <span> Hello world</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-center w-[30%] mt-4'>
                        <button className='bg-[#aa84f9] text-white px-2 rounded-sm'>Read more</button>
                    </div>
                </div>


            </div>
            <div className='absolute right-1/4 translate-y-14 translate-x-16'>
                <div class="w-56 h-56 bg-[#a460fa] rounded-full items-center translate-y-2 translate-x-2 ">
                    <img className='absolute right-/4 left-0 top-2 bottom-12 h-[400px] resize -translate-y-28 translate-x-1  ' src={img2} alt="" />
                </div>
            </div>
            <div className='absolute bottom-0 right-0 mt-10'>
            <img className='w-[140px] resize' src={Ovel2} alt="" />
            <div class="w-4 h-4 bg-[#a460fa] rounded-full absolute top-1 right-12 "></div>
            </div>
            {/* End Container */}
        </div>
    )
}

export default About