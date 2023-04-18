import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-4 flex items-center py-16">
        {/*Main container which will be a grid*/}
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-lg tracking-widest text-[#602e9e]'>About</p>
                <h3 className="py-4">A Little About Me...</h3>
                <p className='py-2 text-gray-600 text-md'>Hello, I&apos;m <span className='font-bold text-blue-700'>Charles Mong</span>, a <span className='font-bold text-blue-700'>front-end web developer</span> based near London, UK. I love to build applications that solve problems and create value-rich user experiences.</p>
                <p className='py-2 text-gray-600 text-md'>
                I specialise in developing web applications mainly using <span className='font-bold text-blue-700'>JavaScript</span>, <span className='font-bold text-blue-700'>React.js</span> and <span className='font-bold text-blue-700'>Next.js</span>.
                </p>                
                <p className='py-2 text-gray-600 text-md'>I have a <span className='font-bold text-blue-700'>Master&apos;s Degree in Chemical Engineering</span> from University of Cambridge (UK), and I have worked within Banking and Finance, Oil and Gas, Business Consulting, and Agriculture.</p>
                <p className='py-2 text-gray-600 text-md'>These industries all demand the same things - analytical problem-solving skills, creative adaptability under pressure, exceptional communication and organisational skills, and a commitment to delivering high-quality work. I believe that my unique blend of skills and experiences sets me apart as a developer.</p>
                <p className='py-2 text-gray-600 text-md'>I&apos;ve been intrigued by technology for a while, but I truly got bitten by the programming bug while working on an EdTech passion project in 2022. I love how logical and productive it is, and how impactful and empowering it can be - and I've been enchanted ever since! I maintain a very keen interest in the ever-changing landscape of front-end technologies.
                </p>                
                <p className='py-2 text-gray-600 text-md'>My real passion lies in building an idea or vision into something that takes on a life of its own, with the capacity to solve problems and impact people.</p>
                <p className='py-2 text-gray-600 text-sm cursor-pointer underline'>Take a look at some of my recent projects</p>
            </div>
            {/*Image*/}
            <div className='w-full max-w-xs h-auto m-auto shadow-lg shadow-[#602e9e] rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in-out duration-300'>
                <Image 
                src="/assets/about-me-mugshot2.jpeg"
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