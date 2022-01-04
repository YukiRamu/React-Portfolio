import React from 'react';
import "./Home.scss";
import { Container } from 'react-bootstrap';
import { BsArrowDown } from "react-icons/bs";
import FollowMe from '../../component/followMe/FollowMe';
import FadeIn from 'react-fade-in';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <>
      <Container className='homeContainer'>
        <div className='title'>
          <h1>Hi there! I'm Yuki Matsubara</h1>
          <p>A front-end developer / life-long smile maker</p>
          <BsArrowDown
            className='arrow'
            onClick={handleClick} />
        </div>
        <FadeIn className="fadeIn">
          <FollowMe />
        </FadeIn>
        {/* <img className='profImg' src='./profImg.JPG' alt='profImg' /> */}
      </Container>
    </>
  );
};

export default Home;
