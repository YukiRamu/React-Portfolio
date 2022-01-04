import React from 'react';
import "./About.scss";
import { Container } from 'react-bootstrap';
import SelfIntro from '../../component/selfIntro/SelfIntro';

const About = () => {
  return (
    <Container className='aboutContainer'>
      <SelfIntro />
    </Container>
  );
};

export default About;
