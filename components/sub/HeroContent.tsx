'use client';
import React from 'react'
import {motion} from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import {SparklesIcon} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Education from '../main/Education';




const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center px-20 md:px-7 mt-40 w-full z-[20] sm:mt-60 sm:px-10 '
    >
      <div className='h-full w-[50%] sm:w-full md:scale-75 flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px]  border border-[#7042f88b] opacity-[0.9]'
        >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 '/>
            <h1 className='Welcome-text text-[13px] sm:text-lg'>Fullstack Developer Portfolio</h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl sm:text-4xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
          Providing
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
          project experience
          </span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m a Full Stack Developer with experience in building Websites, Mobile Application and Softwares. Checkout my projects and skills.
          
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] '
        href='https://drive.google.com/file/d/1l9GuyGBBe3HG9nZRAek5mbz7hq1hg62j/view?usp=sharing'
        download
        >
          Hire Me!
        </motion.a>
      </div>

      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-[50%] h-full flex shrink-0 justify-center items-center '
      >
        <Image
          src="/pic.png"
          alt="work icons"
          height={300}
          width={300}
          className='rounded-lg lg:scale-75 md:scale-90 sm:hidden'
         />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
