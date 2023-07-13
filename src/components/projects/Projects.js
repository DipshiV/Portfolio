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
      title="Movix Website"
      des=" This project is fully functional and resposive movies and Tv shows information website by using react.js and redux toolkit. and fetching data of movies  using here TMDB API. "
      src="https://shotdeck.com/assets/images/new_discover.jpg"
      githublink="https://github.com/DipshiV/movix-website"
      deloymentlink= "https://movix-website-dipshiv.vercel.app/"

    />

      <ProjectsCard
      title="Blog-App"
      des=" This is a simple bloag app in react.js and firebase .I have used here firebase for login authentication from google and when we create Post it is saving in firebase store . and on the basis of login credential perticular user can delete thier post only . "
      src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
      githublink="https://github.com/DipshiV/Blog-App"
      deloymentlink= "https://blog-app-724n.onrender.com/"

    />
        <ProjectsCard
          title="TRELLO CLONE"
          des="The Kanban Board is a visual tool that helps to manage work efficiently and effectively by visualizing the workflow and providing a clear picture of the status of each task"
          src="https://2.bp.blogspot.com/-PcmCGjpg_vc/W__q-xgZD5I/AAAAAAAABf8/lnEo6gsdj707Qk9ocMA3jdcbXTihjhdzgCLcBGAs/s1600/Kanban-PPT-Template-free-kanban-board-excel-template.png"
          githublink="https://github.com/DipshiV/Kanban-Board"
          deloymentlink= "https://trello-123-git-kanban-2-dipshiv.vercel.app/"
        />
        <ProjectsCard
    title="GYM WEBSITE"
    des=" This project is a Twitter clone built using React. It incorporates various features such as adding feeds, liking and disliking posts, and a trending feed section. Firebase for data storing , and the UI components are developed using Material UI. "
    src="https://img.freepik.com/free-vector/sport-get-fit-landing-page-with-photo_52683-25054.jpg?w=996&t=st=1688352964~exp=1688353564~hmac=15555b32824fe3ee46366dc690ef68c9af4970ff12cd92adf2c01e25a836e927"
    githublink="https://github.com/DipshiV/Gym-Website"
    deloymentlink= "https://gym-website-git-master-dipshiv.vercel.app/"

  />
        <ProjectsCard
        title="Chatting App"
        des="Talk-a-tive is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database."
        src="https://img.freepik.com/free-vector/chatbot-concept-background-with-mobile-device_23-2147826977.jpg"
        githublink="https://github.com/DipshiV/chat-app"
        deloymentlink= ""

      />
        <ProjectsCard
          title="TWITTER CLONE"
          des=" This project is a Twitter clone built using React. It incorporates various features such as adding feeds, liking and disliking posts, and a trending feed section. Firebase for data storing , and the UI components are developed using Material UI. "
          src="https://i.ytimg.com/vi/TSsPAOmTFsM/maxresdefault.jpg"
          githublink="https://github.com/DipshiV/Twitter"
          deloymentlink= "https://twitter-clone-2ylt.onrender.com/"

        />

      
       
      </div>
    </section>
  );
}

export default Projects