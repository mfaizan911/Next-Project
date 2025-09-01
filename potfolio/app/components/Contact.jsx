import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e9e8d95c-c7d9-47af-90b5-ab3d6bb0a72c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id='contact'
            className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className='text-center mb-2 text-lg'>
                Connect with me
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className='text-center text-5xl'>
                Get in touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                I'd love to hear from you! If you have questions, comments, or feedback, please use the form below.
            </motion.p>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-4 mt-10 mb-4'>
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        type="text" placeholder='
                        Enter your name'
                        required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        type="text" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></motion.textarea>
                <motion.button
                    whileHover={{ sale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'>
                    Submit now
                    <Image unoptimized src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.button>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='mt-4'>{result}</motion.p>
            </motion.form>
        </motion.div>
    )
}

export default Contact