import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-25"
    >
      {/* Fade-in wrapper */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        {/* Image wrapper — change w-/h- here to resize */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          {/* Rotating ring */}
          <div className="absolute -inset-2 rounded-full border-[4px] border-dashed border-black animate-spin-slow"></div>

          {/* Profile image fills wrapper */}
          <Image
            unoptimized
            src={assets.profile_img}
            alt="Profile"
            className="rounded-full object-cover relative z-10 shadow-lg"
          />
        </div>
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mt-2 mb-2"
      >
        Hi! I'm Muhammad Faizan
        <Image unoptimized src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      {/* Typed Text */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-5xl lg:text-[42px] font-semibold"
      >
        <ReactTyped
          strings={[
            'Frontend Developer',
            'React.js Specialist',
            'Responsive Web Expert',
            'Future DevOps Engineer',
          ]}
          typeSpeed={80}
          backSpeed={60}
          backDelay={1500}
          loop
        />
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-2xl mx-auto text-gray-700"
      >
        I build fast, responsive, and user-friendly websites with modern tools and clean code. Always learning, always improving.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image unoptimized src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
