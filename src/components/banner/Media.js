import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact ,FaGithubSquare} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs,SiMaildotru,SiHtml5,SiAngular } from "react-icons/si";
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {BiLogoJavascript} from 'react-icons/bi'
const Media = () => {
  return (
   
    <div className="flex  xl:flex-row gap-1 lgl:gap-0 justify-between">
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        Find me in
      </h2>
      <div className="flex gap-2 flex-row">

      <a className="bannerIcon"
      href="mailto:vermadipshi70@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <SiMaildotru/>
    </a >
    <a className="bannerIcon"
    href="https://github.com/DipshiV"
    target="_blank"
    rel="noopener noreferrer"
  >
    {" "}
  <BsGithub/>
  </a>
  <a className="bannerIcon"
  href="https://www.linkedin.com/in/dipshi-verma/"
  target="_blank"
  rel="noopener noreferrer"
>
  {" "}
<BsLinkedin/>
</a>
      </div>
    </div>
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        BEST SKILL ON
      </h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
          <FaReact />
        </span>
        <span className="bannerIcon">
          <SiHtml5 />
        </span>
        <span className="bannerIcon">
          <BiLogoJavascript />
        </span>
        <span className="bannerIcon">
          <SiAngular />
        </span>
      </div>
    </div>
  </div>
)
}

export default Media