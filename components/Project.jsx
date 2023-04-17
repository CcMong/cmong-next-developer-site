import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Project = ( {title, bgImage, techSkills, projectPageUrl } ) => {
  return (
    <div className='relative flex items-center justify-center w-full h-auto shadow-md shadow-[#602e9e] rounded-xl p-4 group hover:bg-gradient-to-r from-[#602e9e] to-[#709dff]'>
        <Image className="rounded-xl group-hover:opacity-10" src={bgImage} alt="/" />
        {/*Use position absolute for the overlay elements and centre them. Keep them hidden unless hovered*/}
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h4 className='text-2xl text-white text-center tracking-wider '>{title}</h4>
            <p className='pb-4 pt-2 text-white text-center'>{techSkills}</p>
            {/*Button*/}
            <Link href={projectPageUrl}>
                <p className='text-center text-lg py-2 w-[60%] m-auto rounded-lg bg-white text-gray-700 font-bold cursor-pointer'>Find Out More</p>
            </Link>
        </div>
    </div>
  )
}

export default Project