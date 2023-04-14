import Image from 'next/image';
import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-lg tracking-widest text-[#602e9e]'>Skills</p>
            <h3 className='py-4'>Technologies I&apos;m Familiar With</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/*HTML Skill Section*/}
                {/* <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in-out duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="/" width={64} height={64} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h4>HTML</h4>
                        </div>
                    </div>
                </div> */}
                <SkillCard 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                skill="HTML"/>
                <SkillCard 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                skill="CSS"
                />
                <SkillCard 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                skill="Bootstrap"
                />                
                <SkillCard 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                skill="Tailwind"
                />
                <SkillCard 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                skill="JavaScript"
                />
                <SkillCard 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                skill="React.js"
                />
                <SkillCard 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                skill="Next.js"
                />                
                <SkillCard 
                src="/assets/vercel.png"
                skill="Vercel"
                />
            </div>

        </div>
        
    </div>
  )
}

export default Skills