import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={style.wrapper}>
      <h2>Created with 🖤 </h2>
      <h2>Copyright ©️ 2023  </h2>

        <a className={style.icons}
          href="https://github.com/DipshiV"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsGithub />{" "}
        </a>
        <a className={style.icons}
          href="https://www.linkedin.com/in/dipshi-verma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a className={style.icons}
          href="mailto:vermadipshi70@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <SiMaildotru />
        </a>
      
        <a className={style.icons}
          href="https://www.instagram.com/__dipshii__/?igshid=ZDc4ODBmNjlmNQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsInstagram />
        </a>
    
    </div>
  );
}