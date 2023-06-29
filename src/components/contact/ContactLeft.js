import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiMaildotru, } from 'react-icons/si';
import {BsLinkedin,BsGithub} from 'react-icons/bs'

import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dipshi Verma</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
         I am  Dipshi Verma . Now you can connect with me for better knowing.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">9555786047</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">vermadipshi@70@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>

        <a 
          href="https://github.com/DipshiV"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsGithub />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/dipshi-verma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a 
          href="mailto:vermadipshi70@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <SiMaildotru />
        </a>
      
      </div>
    </div>
  );
}

export default ContactLeft