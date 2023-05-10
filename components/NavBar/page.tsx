'use client';

import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import React, { Component } from 'react'
const NavBar = () => {
    return (
        <nav className=' w-full top-0 bg-[#0f2757] h-[75px] text-white  fixed z-40 '>
            <div className='flex justify-between items-center px-28 py-[15px]'>
                <div className=''>logo</div>
                <div className='flex items-center'>
                    <input className='bg-white h-[40px] w-[350px] rounded-l-sm px-3 text-slate-900 text-[0.9rem]' placeholder='Search...' />
                    <span className='bg-[#1ea2a0] h-[40px] rounded-r-sm w-10 flex items-center justify-center cursor-pointer'>
                        <BsSearch className=' text-[1.4rem]' />
                    </span>
                </div>
            </div>
            <div className='bg-[#151538] px-28 flex items-center justify-center'>
                <ul className='flex gap-10 py-2'>
                    <Link href="/about" className='text-[1.2rem] text-white hover:text-text' >About</Link>
                    <Link href="/" className='text-[1.2rem] text-white hover:text-text' >Home</Link>
                    <Link href="/signup" className='text-[1.2rem] text-white hover:text-text' >Sign Up</Link>
                </ul>
            </div>


        </nav>
    )
}


export default NavBar