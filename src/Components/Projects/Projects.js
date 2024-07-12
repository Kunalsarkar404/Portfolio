import React from 'react';
import './Projects.css';
import template from '../../Assests/template.png';
import arrow_icon from '../../Assests/arrow_icon.svg';
import snapgram_image from '../../Assests/Snapgram.jpg';
import telechat_image from '../../Assests/Telechat.jpg';
import upcoming_image from '../../Assests/upcoming.jpg';

const Projects = () => {
  const projects = [
    {
      p_no: "01",
      p_name: "Snapgram",
      p_desc: "Snapgram is a social media application that allows users to share photos and videos with their followers...",
      github_link: "https://github.com/Kunalsarkar404/Snapgram",
      image: snapgram_image
    },
    {
      p_no: "02",
      p_name: "Telechat",
      p_desc: "Telechat is a messaging app that enables users to send texts, voice messages, and video calls seamlessly...",
      github_link: "https://github.com/Kunalsarkar404/Telechat-Android-App",
      image: telechat_image
    },
    {
      p_no: "03",
      p_name: "Job Search",
      p_desc: "This is a description of an upcoming project. Details will be available soon...",
      github_link: "#",
      image: upcoming_image
    }
  ];

  return (
    <div id='projects' className='projects'>
      <header className='projects-title'>
        <h1>My Projects</h1>
        <img src={template} alt="template" />
      </header>
      <div className='projects-container'>
        {projects.map((project, index) => (
          <div key={index} className='projects-format'>
            <div className="project-header">
              <span className="project-number">{project.p_no}</span>
              <h2>{project.p_name}</h2>
            </div>
            <img src={project.image} alt={project.p_name} className='project-image'/>
            <p>{project.p_desc}</p>
            <div className='projects-readmore'>
              <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                <p>View on GitHub</p>
                <img src={arrow_icon} alt="arrow icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
