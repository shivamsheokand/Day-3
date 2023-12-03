import React from 'react'
import user1 from '../assets/user1.png'
import star1 from '../assets/Star1.png'
import star2 from '../assets/Star5.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import leftArrow from '../assets/leftsmallArrow.png'
import rightArrow from '../assets/rightsmallArrow.png'
const User = () => {
    return (
        <div className='flex flex-col h-screen items-center justify-center bg-[#171717]'>
            <div className='mt-5 flex flex-col justify-center items-center'>
                <h1 className='text-white text-6xl font-semibold'>What</h1>
                <h5 className='text-[#a460fa] text-2xl gap-2 tracking-wide'>user think.</h5>
            </div>
            <div className='flex justify-evenly items-center mt-8 text-center'>
                <div className='flex flex-col items-center justify-center'>
                    <img className='h-[130px] resize' src={user1} alt="" />
                    <h1 className=' uppercase text-white text-xl mt-2'>Lorem ipsum</h1>
                    <div className='flex items-center gap-1 justify-center mt-2'>
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star2} alt="" />
                    </div>
                    <p className='text-white text-sm w-[40%] mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eius, magni molestiae recusandae exercitationem?</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='h-[130px] resize' src={user2} alt="" />
                    <h1 className=' uppercase text-white text-xl mt-2'>Lorem ipsum</h1>
                    <div className='flex items-center gap-1 justify-center mt-2'>
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star2} alt="" />
                    </div>
                    <p className='text-white text-sm w-[40%] mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eius, magni molestiae recusandae exercitationem?</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='h-[130px] resize' src={user3} alt="" />
                    <h1 className=' uppercase text-white text-xl mt-2'>Lorem ipsum</h1>
                    <div className='flex items-center gap-1 justify-center mt-2'>
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star2} alt="" />
                    </div>
                    <p className='text-white text-sm w-[40%] mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eius, magni molestiae recusandae exercitationem?</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-12 m-12'>
                <img className='w-[50px] resize' src={leftArrow} alt="" />
                <img className='w-[50px] resize' src={rightArrow} alt="" />
            </div>
        </div>
    )
}

export default User