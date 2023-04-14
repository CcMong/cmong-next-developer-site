import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="w-full md:h-screen p-4 flex items-center py-16">
        {/*Main container which will be a grid*/}
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-lg tracking-widest text-[#602e9e]'>About</p>
                <h3 className="py-4">A Little About Me...</h3>
                <p className='py-2 text-gray-600'>I won&apos;t stoop to the tired &ldquo;I&apos;m not your average developer&rdquo; cliché... Although, admittedly, my journey to web development has been a fairly unusual one!</p>
                <p className='py-2 text-gray-600'>I graduated with a Master&apos;s Degree in Chemical Engineering from University of Cambridge (UK) in 2007, and I have worked within Banking and Finance, Oil and Gas, Business Consulting, and Agriculture.</p>
                <p className='py-2 text-gray-600'>These varied roles all demanded an analytical approach to problem-solving, creative adaptability under pressure, exceptional communication skills, and a commitment to delivering high-quality work. I believe that my unique blend of skills and experiences sets me apart as a developer.</p>
                <p className='py-2 text-gray-600'>I was working on an EdTech passion project in 2022, and I became irrevocably fascinated by the logical intricacy, potential impact and creative empowerment of programming. That&apos;s when I got bitten by the bug. 
                </p>
                <p className='py-2 text-gray-600'>
                I currently develop projects mainly in JavaScript, React.js and Next.js, with a keen interest in learning new technologies. 
                </p>
                <p className='py-2 text-gray-600'>My real passion is building an idea or vision into something that takes on a life of its own, with the ability to solve problems and impact lives.</p>
                <p className='py-2 text-gray-600 cursor-pointer underline'>Take a look at some of my recent projects</p>
            </div>
            {/*Image*/}
            <div className='w-full max-w-xs h-auto m-auto shadow-lg shadow-[#602e9e] rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in-out duration-300'>
                <Image 
                src="/../public/assets/about-me-mugshot2.jpeg"
                width={300} height={50}
                className="rounded-xl"
                alt="C. Mong portrait"
                />
        
            </div>
        </div>
    </div>
  )
}

export default About