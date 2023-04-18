import Image from 'next/image';
import React from 'react';
import pmnImage from "../public/assets/pmn-screenshotModal.png";
import Link from 'next/link';
import Project from './Project';

const Portfolio = () => {

    const projects = [
        {
            title: "Bodyweight Exercise and Fitness App",
            bgImage: pmnImage,
            techSkills: "HTML, CSS, JavaScript, React, React-Bootstrap, Server APIs",
            projectPageUrl: "/"
        },
        {
            title: "TV / Movie Search and Suggestion App",
            bgImage: pmnImage,
            techSkills: "HTML, CSS, JavaScript, jQuery, Bootstrap, Server APIs",
            projectPageUrl: "/"
        },
        {
            title: "Travel Companion Weather App",
            bgImage: pmnImage,
            techSkills: "HTML, CSS, JavaScript, jQuery, Server APIs",
            projectPageUrl: "/"
        },
        {
            title: "TV Show / Movie Suggestion App",
            bgImage: pmnImage,
            techSkills: "JavaScript, jQuery, Server APIs",
            projectPageUrl: "/"
        }

    ]

  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-lg tracking-widest text-[#602e9e]'>Portfolio</p>
            <h3 className="py-4">Some Recent Projects I Have Built</h3>
            <p className='py-4'>Hover over each project to find out more.</p>
            {/*Container for the Projects */}
            <div className='grid md:grid-cols-2 gap-8'>
                
                {projects.map((element) => (
                    <Project
                    title={element.title}
                    bgImage={element.bgImage}
                    techSkills={element.techSkills}
                    projectPageUrl={element.projectPageUrl}
                />           
                ))}                    

            </div>
        </div>        
    </div>
  )
}

export default Portfolio