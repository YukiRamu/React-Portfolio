import React from 'react';
import "./Footer.scss";
import { AiFillMail } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="tel://12368892834">
        <BsFillTelephoneFill />
        +1 236 889 2834</a>
      <a href="mailto:yuki_matsubara@outlook.com">
        <AiFillMail />
        yuki_matsubara@outlook.com</a>

      <div className="links">
        <a href="https://www.linkedin.com/in/yukimatsubara/" target="_blank">
          <BsLinkedin />LinkedIn</a>
        <a href="https://github.com/YukiRamu" target="_blank">
          <BsGithub />GitHub</a>
      </div>
      <p>©Yuki Matsubara 2021. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
