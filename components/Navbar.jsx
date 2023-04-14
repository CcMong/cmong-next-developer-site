import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {

    // To manage state relating to exhibiting or concealing the menu when the hamburger icon is clicked    
    const [navMenu, setNavMenu] = useState(false);

    // This function will be used to handle the navMenu state. We will toggle between true and false with each click
    const handleNavMenu = () => {
        setNavMenu(!navMenu);
    }

    return (
        <nav className='fixed w-full h-[30] shadow-xl z-[100] backdrop-blur-lg'>
            {/*Main Navigation Menu at Top of Page */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                {/*Logo */}
                <Link href="/">
                    <Image src="/../public/assets/cmong-logo2.png" 
                    alt="/" 
                    width="70" 
                    height="40"
                    className='cursor-pointer hover:scale-105 ease-in-out duration-300'
                    />
                </Link>
                

                {/*Navigation Links, Close Icon and Hamburger Icon */}
                <div>
                    {/*Tailwind is mobile first. So the nav links will be hidden at small screen widths and visible from medium screens and up */}
                    <ul className='hidden md:flex'>
                        {/*
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Portfolio</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                        */}
                        {["home", "about", "skills", "portfolio", "contact"].map((element) => (
                            <Link href={`#${element}`}>
                                <li className='ml-10 text-sm uppercase hover:border-b'>{element}</li>
                            </Link>
                        ))}
                        
                    </ul>
                    <div onClick={handleNavMenu} className='md:hidden cursor-pointer text-[#602e9e]'>
                        <AiOutlineMenu 
                        size={35}
                        className="hover:scale-110 ease-in-out duration-300" />
                    </div>
                </div>
            </div>

            {/*Slide-out Nav Menu for Smaller Widths */} 
            {/*Initially create an overlay for the background when the hamburger menu is clicked. We want this to be hidden at medium screen widths and above */}
            <div className={navMenu ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ""}>
                {/*Menu Container*/}
                <div className={navMenu ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-10 py-2 ease-in duration-500' 
                : 'fixed left-[-200%] ease-in duration-300'}>
                    {/*Menu Content*/}
                    <div>
                        {/*Menu Header */}
                        <div className='flex w-full items-center justify-between'>
                            <Link href="/">
                                <Image 
                                src="/../public/assets/cmong-logo1.png" alt="/" 
                                width="50" height="30"
                                className='hover:scale-110 ease-in-out duration-300 cursor-pointer'
                                />
                            </Link>
                            
                            {/*Wrap x in div, so can apply hover effect to it */}
                            <div onClick={handleNavMenu} className='rounded-full shadow-md shadow-[#602e9e] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 text-blue-800'>
                                <AiOutlineClose />
                            </div>              
                        </div>
                        <div className='border-b border-gray-300 my-4 text-center'>
                            <p className="w-[100%] md:w-[90%] py-1 mb-[8px] text-[#1f2397]">Let's build your incredible vision together</p>
                        </div>

                        {/*Menu Content*/}
                        <div className='py-2 flex flex-col'>
                            <ul className='uppercase'>
                                {/*
                                <Link href="/">
                                    <li className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link href="/">
                                    <li className='py-4 text-sm'>About</li>
                                </Link>
                                <Link href="/">
                                    <li className='py-4 text-sm'>Skills</li>
                                </Link>
                                <Link href="/">
                                    <li className='py-4 text-sm'>Portfolio</li>
                                </Link>
                                <Link href="/">
                                    <li className='py-4 text-sm'>Contact</li>
                                </Link>           
                                */}
                                {["home", "about", "skills", "portfolio", "contact"].map((element) => (
                                    <Link href={`#${element}`}>
                                    <li className='py-2 text-sm'>{element}</li>
                                </Link>
                                ))}
                                                 
                            </ul>
                            <div className='pt-5 border-t border-gray-300 my-4 text-center'>
                                <p className='uppercase tracking-widest text-[#1f2397]'>Get in touch, and let's connect...</p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                                    
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar