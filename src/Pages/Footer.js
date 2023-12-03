import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='flex bg-[#a460fe] h-screen justify-between items-center'>
            <div className=' text-white flex flex-col items-start p-3 mt-8 mb-8'>
                <h1 className='text-3xl font-bold underline'>About</h1>
                <ul className='p-3'>
                    <li>History</li>
                    <li>Our team</li>
                    <li>Misson Statement</li>
                    <li>Trems & Conditons</li>
                    <li>Privcy Policy</li>
                </ul>
            </div>
            <div className=' text-white flex flex-col items-start p-3 mt-8 mb-8'>
                <h1 className='text-3xl font-bold underline'>What we do</h1>
                <ul className='p-3'>
                    <li>History</li>
                    <li>Our team</li>
                    <li>Misson Statement</li>
                    <li>Trems & Conditons</li>
                    <li>Privcy Policy</li>
                </ul>
            </div>
            <div className=' text-white flex flex-col items-start p-3 mt-8 mb-8'>
                <h1 className='text-3xl font-bold uppercase'>sing up with <br /> _Our newslatter</h1>
                <input  className='px-3 bg-[#a460fe] border border-white m-2' type="text" />
                <ul className='flex p-3 gap-2 items-center'>
                    <h1 className='text-xl'>Follow on us:</h1>
                    <li><CiTwitter /></li>
                    <li><FaFacebookF /></li>
                    <li><FaInstagram /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer