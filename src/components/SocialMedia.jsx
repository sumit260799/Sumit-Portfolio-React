import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/sumit-das-b06730253/"
        target="_blank"
      >
        {" "}
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/sumit260799" target="blank">
        {" "}
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/sumit.das99/" target="blank">
        {" "}
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
