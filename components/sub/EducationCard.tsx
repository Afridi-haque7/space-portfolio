import Image from 'next/image'
import React from 'react'


interface Props{
    name: string,
    course: string,
    year: string,
    marks: string,
    image: string,
};


const EducationCard = ({name, course, year, marks, image}: Props) => {
  return (
    <div className='border-purple-800/30 cursor-pointer  flex items-center gap-20 sm:gap-10 lg:gap-10  py-5 md:py-10 px-5 sm:px-3 lg:px-10 w-full rounded-xl bg-white/10'>
      <div>
        <Image
        src={image}
        alt="cu"
        width={70}
        height={60}
        className="lg:scale-150 md:scale-125 sm:scale-125"
         />
      </div>
      <div className='text-white'>
        <h1 className='text-2xl lg:text-xl font-semibold sm:text-xl'>{name}</h1>
        <h1 className='text-lg font-semibold'>{course}</h1>
        <div>
        <h1 className='text-lg lg:text-sm font-semibold'>{year}</h1> 
        <h1 className='text-lg lg:text-sm font-semibold'>{marks}</h1>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
