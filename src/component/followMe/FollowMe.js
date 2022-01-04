import React from 'react';
import "./FollowMe.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const FollowMe = () => {
  return (
    <div className='followMe'>
      <h4>Follow me →</h4>
      <a href="https://www.linkedin.com/in/yukimatsubara/" target="_blank">
        <BsLinkedin /></a>
      <a href="https://github.com/YukiRamu" target="_blank">
        <BsGithub /></a>
    </div>
  );
};

export default FollowMe;
