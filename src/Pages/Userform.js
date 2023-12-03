import React from 'react'
import img3 from '../assets/img3.png'
const Userform = () => {
    return (
        <div className='flex bg-[#171717]  h-screen'>
            <img className='h-[550px] w-[550px] resize ' src={img3} alt="" />
            <div className='flex justify-center items-center text-center flex-col'>
                <h1 className='text-3xl font-semibold text-white'>Subscribe</h1>
                <h2 className='text-xl text-[#a460fe]'>to our newslettar</h2>
                <p className='text-white w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, illum.</p>
                <div className='mt-8 flex flex-col justify-center items-center'>
                    <input className='border-2 text-white bg-[#171717] m-2 px-3 border-[#a460fe] uppercase' type="text" placeholder='name' />
                    <input type="text" className='border-2 text-white bg-[#171717] m-2 px-3 border-[#a460fe] uppercase' placeholder='Email' />
                    <input type="text" className='border-2 text-white bg-[#171717] m-2 px-3 border-[#a460fe] uppercase h-20' placeholder='message' />
                </div>
                <button className='bg-[#a460fe] text-white px-2 py-1 rounded-sm mt-8'>Submit</button>
            </div>
        </div>
    )
}

export default Userform