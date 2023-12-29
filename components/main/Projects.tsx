"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <div className="z-[20] flex flex-col items-center justify-center py-20">
      <Element name="projects"></Element>
      <h1
        className="josefin text-center text-5xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
        id="projects"
      >
        {`< Featured Projects />`}
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Docubuddy.webm"
          imgsrc={false}
          githubURL="https://github.com/punitkr03/docubuddy"
          siteURL="https://docubuddy.vercel.app/"
          title="DocuBuddy"
          description="DocuBuddy allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away."
        />
        <ProjectCard
          src="/space-portfolio.png"
          imgsrc={true}
          githubURL="https://github.com/punitkr03/space-portfolio"
          siteURL="https://punitkumar.vercel.app/"
          title="Space Themed Website"
          description="Space themed portfolio which showcases my web development skills and also my interest in Space Exploration."
        />
        <ProjectCard
          src="/lazy-app.png"
          imgsrc={true}
          title="Lazy App"
          githubURL="https://github.com/punitkr03/Lazy-App"
          siteURL="https://lazy-app.netlify.app/"
          description="A micro-gig platform built to cater to gigs created around you and in your locality. Users can find gigs and also create gigs."
        />
      </div>
    </div>
  );
};

export default Projects;
