import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode, setIsDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image unoptimized src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image unoptimized src={assets.mail_icon} alt='' className='w-6' />
                    contact@mfaizan.dev
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-8 py-6'>
                <p>&copy; 2025 Muhammad Faizan. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li> <a href="https://github.com/mfaizan911" target="_blank">GitHub</a> </li>
                    <li> <a href="https://www.linkedin.com/in/mfaizan911/" target="_blank">LinkedIn</a> </li>
                </ul>
            </div>

        </div>
    )
}

export default Footer