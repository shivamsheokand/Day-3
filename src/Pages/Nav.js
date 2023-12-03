import React from 'react'

const Nav = () => {
    return (
        <div className='flex justify-between items-center mx-14 mt-2 p-3 sticky '>
            <div className='mx-2'>
                <span className='uppercase font-bold text-lg px-8 py-2 text-white'>Logo</span>

            </div>
            <div className='flex items-center gap-20 font-semibold '>
                <ul className='flex items-center gap-20 uppercase text-white cursor-pointer'>
                    <li className=' underline active:text-red-500'>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Blog</li>
                </ul>
                <button className='mr-8 uppercase bg-white rounded-sm px-2 py-sm'>SingIn</button>
            </div>
        </div>
    )
}

export default Nav