import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image';

const Landing = () => {

  return (

    <div className='w-full h-screen text-center flex'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase tracking-widest text-sm text-gray-600 mt-[37vh]'>You Created It. Now Let&apos;s Build It Together.</p>
              <h1 className='py-4 text-gray-600'>
                Hey! I&apos;m <span className='text-[#602e9e]'><Link href="#about">Charles Mong</Link></span>,
              </h1>
              <h1 className='text-gray-600 pb-4'>
                A Front-End Web Developer
              </h1>
              <p className='py-4 -tracking-wide text-gray-600 max-w-[80%] m-auto border-t-2 '>
              I help businesses to build powerful, responsive front-end web applications that deliver outstanding user experiences. I am passionate about turning vision into impactful digital assets that add value, and solve problems creatively. 
              </p>
              <p className='-tracking-wide text-gray-600 max-w-[80%] m-auto'>
                Get in touch, and let&apos;s get started on your next great idea...
              </p>
              <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
                <div className='rounded-full shadow-md shadow-[#602e9e] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 text-blue-800'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-md shadow-[#602e9e] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 text-blue-800'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-md shadow-[#602e9e] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 text-blue-800'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-md shadow-[#602e9e] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 text-blue-800'>
                  <BsFillPersonLinesFill />
                </div>


              </div>
            </div>
        </div>
    </div>
  )
}

export default Landing