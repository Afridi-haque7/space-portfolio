import React from 'react'
import EducationCard from '../sub/EducationCard';

const eduArr = [
    {
        name: "Chandigarh University",
        course: "B.E. in Computer Science & Engineering",
        year: "2020-2024",
        marks: "CGPA: 8.05",
        image: "/cu-logo.png",
    },
    {
        name: "Guidance Academy",
        course: "10+2 Standard in Science (WBCHSE)",
        year: "2018-2020",
        marks: "Percentage: 93%",
        image: "/gakc.jpg",
    }
];


const Education = () => {
  return (
    <div className='mt-20'>
      <div className="text-white text-6xl font-bold mx-20 sm:text-4xl sm:mx-10" >Education</div>
      <div className='flex md:flex-col mx-20 sm:mx-4 gap-10 mt-10 lg:mx-5 lg:gap-5 md:mx-10 cursor-pointer'>
        {eduArr.map((edu, index) => (
            <EducationCard 
                key={index}
                name={edu.name}
                course={edu.course}
                year={edu.year}
                marks={edu.marks}
                image={edu.image}
                
            />
        ))

        }
      </div>
    </div>
  )
}

export default Education
