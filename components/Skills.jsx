import Image from 'next/image';
import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
    const skillArray = [
        {
            skill: "HTML",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            skill: "CSS",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            skill: "Bootstrap",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
        {
            skill: "Tailwind",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        },
        {
            skill: "JavaScript",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            skill: "React.js",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            skill: "Next.js",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        },
        {
            skill: "Vercel",
            src: "/assets/vercel.png"
        }
    ]

  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-lg tracking-widest text-[#602e9e]'>Skills</p>
            <h3 className='py-4'>Main Technologies I Work With</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                {/*HTML Skill Section*/}
                {skillArray.map((element) => (
                    <SkillCard 
                    key={element.skill}
                    src={element.src}
                    skill={element.skill}
                    />
                ))}
                
            </div>

        </div>
        
    </div>
  )
}

export default Skills