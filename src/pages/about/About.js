import React from 'react';
import "./About.scss";
import { Container } from 'react-bootstrap';
import SelfIntro from '../../component/selfIntro/SelfIntro';
import FadeIn from 'react-fade-in/lib/FadeIn';

const About = () => {
  return (
    <Container className='aboutContainer'>
      <FadeIn>
        <SelfIntro />
      </FadeIn>
    </Container >
  );
};

export default About;;
