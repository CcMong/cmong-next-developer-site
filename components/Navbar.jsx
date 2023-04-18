import React, { useState, useEffect } from 'react';
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

    // To manage state so that the navbar shadow only appears when the user starts scrolling

    const [navShadow, setNavShadow] = useState(false);

    // Implement a useEffect so that this comes into effect only once when the page is loaded

    useEffect(() => {
        const handleNavShadow = () => {
            // If the user scrolls 90 pixels or more, we want the shadow to take effect
            if(window.scrollY >= 90) {
                setNavShadow(true)
            } else {
                setNavShadow(false)
            }
        }
        // Event listener to detect user scroll
        window.addEventListener("scroll", handleNavShadow)
    }, [])    


    return (
        <nav id="navbar" className={navShadow ? 'fixed w-full h-[30] shadow-xl z-[100] backdrop-blur-lg' : 'fixed w-full h-[30] z-[100] backdrop-blur-lg'}>
            {/*Main Navigation Menu at Top of Page */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                {/*Logo */}
                <Link href="/">
                    <Image src="/assets/cmong-logo2.png" 
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
                        
                        {["home", "about", "skills", "portfolio", "contact"].map((element) => (
                            <Link 
                            href={`/#${element}`}
                            scroll={false}
                            key={element}
                            >
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
            <div className={navMenu ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/60' : ""}>
                {/*Menu Container*/}
                <div className={navMenu ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-10 py-2 ease-in-out duration-500' 
                : 'fixed right-[-200%] ease-in-out duration-300'}>
                    {/*Menu Content*/}
                    <div>
                        {/*Menu Header */}
                        <div className='flex w-full items-center justify-between' onClick={handleNavMenu}>
                            <Link href="/">
                                <Image 
                                src="/assets/cmong-logo1.png" alt="/" 
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
                            <p className="w-[100%] md:w-[90%] py-1 mb-[8px] text-[#1f2397]">Let&apos;s build your incredible vision together</p>
                        </div>

                        {/*Menu Content*/}
                        <div className='py-2 flex flex-col'>
                            <ul className='uppercase'>
                                
                                {/*Wrapped these links in a div which will change the navMenu state to false when any link is clicked, to make the slide out menu disappear */}
                                {["home", "about", "skills", "portfolio", "contact"].map((element) => (
                                    <div onClick={handleNavMenu}>
                                        <Link 
                                        href={`/#${element}`}
                                        scroll={false}
                                        key={element}
                                        >
                                        <li className='py-2 text-sm'>{element}</li>
                                        </Link>
                                    </div>
                                ))}
                                                 
                            </ul>

                            <div className='pt-5 border-t border-gray-300 my-4 text-center'>
                                <p className='uppercase tracking-widest text-[#1f2397]'>Get in touch, and let&apos;s connect...</p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%] m-auto' onClick={handleNavMenu}>
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