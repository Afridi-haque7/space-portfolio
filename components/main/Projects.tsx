import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 mx-20 sm:mx-0 h-full w-full gap-10 px-10 sm:px-5">
        <ProjectCard
          src="/autocap.png"
          title="AutoCapGen Pro"
          description="Autocapgen Pro: Transforming video accessibility with NextJS & AWS. Seamlessly edit transcriptions & synchronize timestamps for enhanced engagement."
          link="https://autocapgenpro-deploy.vercel.app/"
        />
        <ProjectCard
          src="/Book&Stay.png"
          title="Book&Stay"
          description="Book&Stay: Elevating hotel reservations with React, Express, Node, and MongoDB. Experience streamlined search, direct booking, and increased engagement."
        link="https://autocapgenpro-deploy.vercel.app/"
        />
        <ProjectCard
          src="/melophile.png"
          title="Melophile"
          description="Melophile: Revolutionizing music enjoyment with HTML, React, and Bootstrap. Free streaming, direct downloads, and skyrocketed user retention and conversions."
        link="https://autocapgenpro-deploy.vercel.app/"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Bookify"
          description="Bookify: Your go-to React bookstore powered by Firebase. Seamlessly manage user accounts, create, view, and share book listings with ease."
         link="https://autocapgenpro-deploy.vercel.app/"
         />
         <ProjectCard
          src="/weather.png"
          title="Weather App"
          description="Weather PWA: Experience real-time weather updates with ReactJS and OpenWeatherMap API. Enjoy seamless access to weather data and offline functionality for enhanced usability."
         link="https://autocapgenpro-deploy.vercel.app/"
         />
      </div>
    </div>
  );
};

export default Projects;


