import React from 'react';
import ProjectDesc from '../components/ProjectDesc';
import wwlImage from "../public/assets/wwl-demo-2.jpg";

const weightlossapp = () => {

    const projectDescription = 
    <div>
        <p className='py-2'>
            The &ldquo;Weightless Weightloss&rdquo; App helps users to achieve their fitness goals through simple and effective bodyweight exercises, without the need for any gym equipment or weights.
        </p>
        <p className='py-2'>
            The user can jump right into a quick workout, or can search from over 1300 exercises to build a custom workout session. Exercises can also be saved to &ldquo;Favourites&rdquo; for easy access.
        </p>
        <p className='py-2'>
            Exercises can be reordered on a list by drag-and-drop before the workout begins. During the workout, the user is shown the correct exercise technique throughout and, by default, will have 30 seconds per exercise with 10 seconds rest in between. These times can be increased or decreased in 1- or 10-second steps.
        </p>
        <p className='py-2'>
            This app was built using ReactJS, React-Bootstrap and data from Rapid API, along with libraries such as React-Slick (carousel), React-Beautiful-DnD (drag-and-drop), React-Countdown-Circle-Timer and React-Toastify (push notifications). The app is hosted on Netlify.
        </p>
    </div>

    const weightlossAppInfo = {
        projectTitle: "Bodyweight Weight-Loss and Fitness App",
        techSummary: "React JS / React-Bootstrap / Netlify",
        projectImg: wwlImage,
        projectName: '"Weightless Weightloss" Fitness App',
        projectDescription: projectDescription,
        technologies: ["JavaScript", "React JS", "React-Bootstrap", "Netlify", "Rapid API", "Beautiful-DnD", "Countdown-Circle-Timer", "React-Slick", "React-Toastify"],
        appUrl: "https://weightless-weightloss.netlify.app",
        repoUrl: "https://github.com/Boxie999/weightless-weightloss"
    }


    return (
        <ProjectDesc 
        projectTitle={weightlossAppInfo.projectTitle}
        techSummary={weightlossAppInfo.techSummary}
        projectImg={weightlossAppInfo.projectImg}
        projectName={weightlossAppInfo.projectName}
        projectDescription={weightlossAppInfo.projectDescription}
        technologies={weightlossAppInfo.technologies}
        appUrl={weightlossAppInfo.appUrl}
        repoUrl={weightlossAppInfo.repoUrl}
        />
    )
}

export default weightlossapp