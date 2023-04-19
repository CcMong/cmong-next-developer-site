import React from 'react';
import Image from 'next/image';
import { RiRadioButtonLine } from "react-icons/ri";
import Link from 'next/link';


const ProjectDesc = ({ projectTitle, techSummary, projectImg, projectName, projectDescription, technologies, appUrl, repoUrl  }) => {
  return (
    <div className='w-full'>

        {/*Banner section*/}
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            {/*Overlay*/}
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image 
            className='absolute z-1 h-[30vh] lg:h-[40vh]'
            src={projectImg} alt={projectTitle}
            style={{objectFit: "cover"}}
            />
            {/*Project Title*/}
            <div className='max-w-[1240px] absolute top-[70%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200 z-10 p-2'>
                <h3 className='py-2'>{projectTitle}</h3>
                <h4>{techSummary}</h4>
            </div>
        </div>

        {/*Page Body*/}
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='uppercase text-lg tracking-widest text-[#602e9e]'>Project: {projectName}</p>
                <h3 className='py-4'>Overview</h3>

                {/*Project Description */}
                <div className='-tracking-wide'>
                    {projectDescription}
                </div>

                {/*Project and Code Link Buttons */}
                <div className='flex justify-center m-4'>
                    <Link href={appUrl} target="blank">
                        <button className='px-8 py-1 mt-4 mr-8 hover:scale-105 ease-in-out duration-300'>Project Demo</button>
                    </Link>
                    <Link href={repoUrl} target="blank">
                        <button className='px-8 py-1 mt-4 mr-8 hover:scale-105 ease-in-out duration-300'>Code Repo</button>
                    </Link>
                    
                </div> 

                         

            </div>

            {/*Technologies List */}
            <div className='col-span-4 md:col-span-1 shadow-md shadow-[#602e9e] rounded-xl p-2 m-auto md:min-w-[30%] hover:scale-105 ease-in-out duration-300'>
                <div className="p-1">
                    <p className='text-center font-bold underline pb-2 text-sm'>Technologies</p>

                    {/*Using the grid on the technology list container so that the list spans the width and displays multiple content in a row, rather than just being a column */}
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        {technologies.map((tech) => (
                            <p className=' text-gray-600 py-2 flex items-center text-sm mx-1 -tracking-wide'><RiRadioButtonLine className='pr-1 text-lg' />{tech}</p>
                        ))}
                    </div>    
                    
                
                </div>

            </div>
            <Link href="/#portfolio">
                <p className='py-2 text-gray-600 text-sm cursor-pointer underline'>Back to Portfolio Section</p>
            </Link>

        </div>
        
    </div>
  )
}

export default ProjectDesc