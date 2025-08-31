import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20'>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-30' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I'm Muhammad Faizan <Image src={assets.hand_icon} alt='' className='w-6' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[50px]' style={{ fontFamily: 'Ovo, serif' }}>

                Frontend web developer based in Lahore.</h1>
            <p className='max-w-2xl mx-auto'>
                Front-End Developer from Lahore, Pakistan. I build fast, responsive websites with modern tools and clean code.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

                <a href="#contact" className='px-10 py-3 border rounded-full border-white !bg-black text-white flex items-center gap-2 dark:bg-transparent'>
                    Contact me
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </a>

                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume<Image src={assets.download_icon} alt='' className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header