import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TRELLO CLONE"
          des="The Kanban Board is a visual tool that helps to manage work efficiently and effectively by visualizing the workflow and providing a clear picture of the status of each task"
          src={projectThree}
        />
        <ProjectsCard
        title="Chatting App"
        des="Talk-a-tive is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database."
        src={projectTwo}
      />
        <ProjectsCard
          title="TWITTER CLONE"
          des=" This project is a Twitter clone built using React. It incorporates various features such as adding feeds, liking and disliking posts, and a trending feed section. Firebase for data storing , and the UI components are developed using Material UI. "
          src={projectOne}
        />
       
       
      </div>
    </section>
  );
}

export default Projects