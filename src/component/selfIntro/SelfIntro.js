import React from 'react';
import "./SelfIntro.scss";
import { Container, Row, Col } from 'react-bootstrap';

const SelfIntro = () => {
  return (
    <>
      <div className='intro'>
        <h1># About me</h1>
        <p>
          Born in Osaka, Japan. Based in Vancouver, Canada.
          A well-organized and positive person, problem solver, multi-tasker.
          Worked as a system engineer, a travel consultant, and IT customer support
        </p>

        <p>
          I have a passion for creating an amazing user experience while at the same time, producing code that is clean, efficient, and exemplifies disciplined software engineering practices. I love writing codes, solving technical problems, and creating logic!
        </p>

        <p>
          Learning and growing as a developer is essential to me and I have worked on multiple front-end projects related to JavaScript and React for my diploma program.
        </p>

        <p>
          Having more than 5 years of extensive experience as a system engineer (project manager) and IT customer support in fast-paced organizations, I am confident in my analytical and troubleshooting skills as well as communication skills to resolve customers' concerns and problems by providing the best solutions based on their critical business objectives.
        </p>

        <p>
          I am great at efficiently managing my time to handle multiple IT projects at the same time without any delay in a fast-paced and challenging environment.
        </p>

        <p>
          I am detail-oriented and a quick self-starter. I do take the initiatives to learn new things and complete as many tasks as possible. I love working both collaboratively and independently. I am a happy and positive person always staying calm and patient.
        </p>
      </div>

      <Container className="intro">
        <h1># Skills</h1>
        <h2>Front-end</h2>
        <Row sm={4}>
          <Col>HTML</Col>
          <Col>CSS | SCSS</Col>
          <Col>Bootstrap</Col>
          <Col>JavaScript</Col>
          <Col>React.js</Col>
          <Col>React Redux</Col>
        </Row>
      </Container>


      {/* <p>HTML</p>
      <p>CSS | SCSS</p>
      <p>Bootstrap</p>
      <p>JavaScript</p>
      <p>React.js</p>
      <p>React Redux</p>
      <h2>Backend</h2>
      <p>Node.js</p>
      <p>express.js</p>
      <p>Mongo DB | Mongoose</p> */}

    </>
  );
};

export default SelfIntro;
