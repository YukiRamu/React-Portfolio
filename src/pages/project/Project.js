import React from 'react';
import "./Project.scss";
import { Container } from 'react-bootstrap';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ProjectCard from '../../component/projectCard/ProjectCard';

const Project = () => {
  return (
    <Container className='projectContainer'>
      <FadeIn>
        <ProjectCard />
      </FadeIn>
    </Container >
  );
};

export default Project;
