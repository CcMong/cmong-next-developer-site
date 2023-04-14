import React from 'react';
import Image from 'next/image';

const SkillCard = ( {src, skill }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in-out duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={src} alt="/" width={64} height={64} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h4>{skill}</h4>
            </div>
        </div>
    </div>
  )
}

export default SkillCard