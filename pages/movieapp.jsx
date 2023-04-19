import React from 'react';
import ProjectDesc from '../components/ProjectDesc';
import movieImage from "../public/assets/pmn-screenshotWatchlist.png";

const movieapp = () => {

    const projectDescription = 
    <div>
        <p className='py-2'>
            The "Perfect Movie Night" App brings together the movies and TV shows from ten of the biggest streaming platforms, all in one place. It saves the user the time and hassle of scrolling through different options on different platforms to see what they would like to watch. It also serves as a suggestive app, potentially alerting the user to matching interests that they otherwise would not have discovered.
        </p>
        <p className='py-2'>
            The user is able to choose a streaming platform, as well as type (movie or TV) and genre preferences, and will receive recommendations on what to watch. Clicking on a movie/show poster provides more information, and the user can add it to a watchlist for later access. Items in the watchlist can easily be accessed, added to or removed as desired by the user.
        </p>        
        <p className='py-2'>
            The motive behind this project was the potential benefit, from a conceptual perspective, if polished and scaled. Also, I decided to code it purely in vanilla JavaScript and jQuery to sharpen and showcase my skills, and to try something a little different from the usual streaming platform clone. There is still a lot of scope for further development, which I intend to pursue in due course.
        </p>
        <p className='py-2'>
            This app was built using vanilla JavaScript, jQuery and Bootstrap, with data obtained from Rapid API and OMDB API. The app is hosted on Github Pages.
        </p>
    </div>
        

    const movieAppInfo = {
        
        projectTitle: "Streaming Platform Aggregation App",
        techSummary: "HTML / CSS / JavaScript / jQuery / Bootstrap",
        projectImg: movieImage,
        projectName: 'The "Perfect Movie Night" App',
        projectDescription: projectDescription,
        technologies: ["JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "OMDB API", "Rapid API", "Github Pages"],
        appUrl: "https://drrobertson9673.github.io/Perfect_Movie_Night/",
        repoUrl: "https://github.com/DRRobertson9673/Perfect_Movie_Night"
    }
   

    return (
        <ProjectDesc 
        projectTitle={movieAppInfo.projectTitle}
        techSummary={movieAppInfo.techSummary}
        projectImg={movieAppInfo.projectImg}
        projectName={movieAppInfo.projectName}
        projectDescription={movieAppInfo.projectDescription}
        technologies={movieAppInfo.technologies}
        appUrl={movieAppInfo.appUrl}
        repoUrl={movieAppInfo.repoUrl}
        />
    )
}

export default movieapp