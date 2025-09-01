import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div
            id="top"
            className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20"
        >
            {/* Animated background blob */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10"
            />

            {/* Profile Image with CSS Rotating Ring */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative w-44 h-44 sm:w-56 sm:h-56"
            >
                {/* Rotating dashed ring */}
                <div className="absolute -inset-4 rounded-full border-[6px] border-dashed border-blue-500 animate-spin-slow"></div>

                {/* Profile image */}
                <Image
                    src={assets.profile_img}
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover relative z-10 shadow-lg"
                />
            </motion.div>

            {/* Greeting */}
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-lg md:text-xl text-gray-600"
            >
                Hi! I'm Muhammad Faizan
                <Image src={assets.hand_icon} alt="" className="w-6" />
            </motion.h3>

            {/* Typed Text Effect */}
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl sm:text-5xl lg:text-[42px] font-medium text-gray-900"
            >
                <ReactTyped
                    strings={[
                        'Frontend Developer',
                        'React.js Specialist',
                        'Responsive Web Expert',
                        'Future DevOps Engineer',
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={1500}
                    loop
                />
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="max-w-2xl mx-auto text-gray-600 leading-relaxed"
            >
                I build fast, responsive, and user-friendly websites with modern tools and clean code. Always learning, always improving.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="#contact"
                    className="px-10 py-3 border rounded-full border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center gap-2 shadow-md hover:shadow-lg transition"
                >
                    Contact me
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="/sample-resume.pdf"
                    download
                    className="px-10 py-3 border rounded-full border-gray-300 flex items-center gap-2 bg-white shadow-md hover:shadow-lg transition"
                >
                    My resume
                    <Image src={assets.download_icon} alt="" className="w-4" />
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
