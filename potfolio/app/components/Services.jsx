import { assets, serviceData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className='text-center mb-2 text-lg '>
                What I offer
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className='text-center text-5xl'>
                My Services
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-10'>
                I provide front-end development services focused on building fast, reliable websites tailored to client needs. Whether starting a new project or improving an existing one.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5 my-5'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{scale: 1.05}}
                        key={index} className='border border-gray-400 rounded-lg px-5 py-4 hover:shadow-[4px_4px_0_#000000] cursor-pointer hover:bg-[#FcF4FF] hover:-translate-y-1 duration-500'>
                   <div className='flex items-center gap-3 mb-4'> 
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        </div>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services