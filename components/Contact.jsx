import Image from 'next/image';
import React from 'react';
import contactImage from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div className='w-full lg:h-screen '>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='uppercase text-lg tracking-widest text-[#602e9e]'>Contact</p>
            <h3 className='py-4'>Get In Touch - I'd love to hear from you!</h3>

            <div className='grid lg:grid-cols-5 gap-8'>

                {/*Left side - my info*/}
                <div className='col-span-3 lg:col-span-2 w-full  h-full shadow-lg shadow-[#602e9e] rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in-out duration-300' src={contactImage} alt="/" />
                        </div>
                        <div>
                            <h3 className='pt-4'>Charles Mong</h3>
                            <p className='font-bold pt-2'>Front-End Developer</p>
                            <p className='-tracking-wide pt-4'>I am available for freelance and full-time opportunities.</p>
                            <p className='-tracking-wide py-2'>
                            If you would like to work with me, or if you have any questions or enquiries, get in touch and let's have a chat.
                            </p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>

                            {/*Socials buttons */}
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

                {/*Right side - contact form*/}
                <div className='col-span-3 w-full h-auto shadow-lg shadow-[#602e9e] rounded-xl lg:p-4'>

                    <p className='tracking-wider p-4 text-center'>Please fill out the form below with your contact details, along with your message, and I will get back to you as soon as I can.</p>

                    <div className='p-4'>

                        <form>
                            {/*Name and Number, on one line at high widths*/}
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col '>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className="border-2 rounded-lg p-3 flex border-purple-300" type='text'/>
                                </div>
                                <div className='flex flex-col '>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className="border-2 rounded-lg p-3 flex border-purple-300" type='text'/>
                                </div>
                            </div>

                            {/*Email*/}
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className="border-2 rounded-lg p-3 flex border-purple-300" type='email'/>
                            </div>

                            {/*Company*/}
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Company / Organisation</label>
                                <input className="border-2 rounded-lg p-3 flex border-purple-300" type='text'/>
                            </div>

                            {/*Subject of Enquiry*/}
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject of Enquiry</label>
                                <input className="border-2 rounded-lg p-3 flex border-purple-300" type='text'/>
                            </div>

                            {/*Message*/}
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className="border-2 rounded-lg p-3 flex border-purple-300" rows={10}/>
                            </div>

                            {/*"Send Message" Button */}
                            <button className='w-full p-3 text-gray-100 mt-5'>Send Message</button>

                        </form>

                    </div>

                </div>
                
            </div >
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-[#602e9e] p-4'>
                        <HiOutlineChevronDoubleUp
                        className='text-blue-800' size={30}
                        />
                    </div>
                </Link>

            </div>
            
        </div>
        
    </div>
  )
}

export default Contact