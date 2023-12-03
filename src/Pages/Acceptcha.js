import React from 'react'
import Oval from '../assets/Oval.png'
import Arrow from '../assets/Arrow.png'
const Acceptcha = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#171717]'>
            <div className='flex justify-center items-center flex-col mt-16'>
                
                <div><img className='translate-y-3/4 translate-x-36 w-[60%]' src={Oval} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center text-white uppercase -translate-y-4'>
                    <span className='font-bold text-5xl'>Accept</span>
                    <span className='font-thin text-4xl'>New</span>
                    <span className='font-bold text-5xl'>Challenges</span>
                </div>
                <div class="w-4 h-4 bg-[#a460fa] rounded-full items-center translate-y-1 absolute left-1/4 translate-x-5 "></div>
                <div class="w-4 h-4 bg-[#a460fa] rounded-full items-center translate-y-32 absolute left-2/4 translate-x-40"></div>
            </div>
            <div className='mt-16'>
                <img src={Arrow} alt="" />
            </div>
        </div>
    )
}

export default Acceptcha