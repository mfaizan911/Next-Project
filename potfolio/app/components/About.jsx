import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import { Award } from 'lucide-react';

const techStack = [
  { icon: assets.html, name: 'HTML5' },
  { icon: assets.css, name: 'CSS3' },
  { icon: assets.javascript, name: 'JavaScript' },
  { icon: assets.react, name: 'React.js' },
  { icon: assets.tailwindcss, name: 'Tailwind CSS' },
  { icon: assets.nodejs, name: 'Node.js' },
  { icon: assets.npm, name: 'NPM' },
  { icon: assets.github, name: 'GitHub' },
  { icon: assets.git, name: 'Git' },
  { icon: assets.vscode, name: 'VS Code' },
];

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-4 sm:px-8 lg:px-12 py-10 scroll-mt-20 max-w-screen-xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center mb-2 tracking-wide text-2xl"
      > Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center text-4xl sm:text-5xl font-semi"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col lg:flex-row items-start gap-12 my-20"
      >
        {/* Left Column: Text + Certificate */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="max-w-2xl text-lg leading-relaxed"
          >
            I’m a Frontend Developer specializing in building responsive, user-friendly websites with modern tools like React.js and Tailwind CSS. I focus on clean code, performance, and client-facing polish. I’m constantly learning and expanding my skill set to stay ahead in the fast-moving web development world.
          </motion.p>

          {/* Certificate Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex items-start gap-4 border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <Award className="w-10 h-10 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">
                Meta Front-End Developer Professional Certificate
              </h3>
              <p className="text-sm text-gray-600">
                Completed comprehensive training in HTML, CSS, JavaScript, React, responsive design, and version control.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Tech Stack */}
        <div className="flex-1">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="mb-6 text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 inline-block pb-1"
          >
            Tech Stack
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <Image unoptimized
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                />
                <span className="text-xs sm:text-sm text-gray-600">{tech.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
