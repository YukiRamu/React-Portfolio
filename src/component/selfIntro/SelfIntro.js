import React from 'react';
import "./SelfIntro.scss";
import Footer from '../footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { IoDiamond } from "react-icons/io5";

const SelfIntro = () => {
  return (
    <>
      <div className='intro'>
        <h2># About me</h2>
        <p className='description'>
          Born in Osaka, Japan. Based in Vancouver, Canada.
          A well-organized and positive person, problem solver, multi-tasker.
          Worked as a system engineer, a travel consultant, and IT customer support for 5+ years.
        </p>

        <h3>Yuki.is( )</h3>
        <ul>
          <li><IoDiamond />passionate about writing coding, solving technical problems, and creating logics!</li>
          <li><IoDiamond />confident in her analytical and troubleshooting skills as well as interpersonal skills.</li>
          <li><IoDiamond />a multi-tasker and a quick self-starter.</li>
          <li><IoDiamond />great at working both collaboratively and independently.</li>
          <li><IoDiamond />looking forward to taking the initiatives to contribute to the team!</li>
        </ul>
      </div>

      <div className="skill">
        <h2># Skills</h2>
        <p>/* Front-end */</p>
        <Row
          className='skillRow'
          xs={2} sm={2} md={4} lg={5} xl={6} xxl={6}>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /></Col>
        </Row>
        <p>/* Backend */</p>
        <Row
          className='skillRow'
          xs={2} sm={2} md={4} lg={5} xl={6} xxl={6}>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" /></Col>
        </Row>
        <p>/* Development | Tools */</p>
        <Row
          className='skillRow'
          xs={2} sm={2} md={4} lg={5} xl={6} xxl={6}>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" /></Col>
          <Col><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" /></Col>
        </Row>
        <p>/* Others */</p>
        <Row
          className='skillRow'
          xs={2} sm={2} md={4} lg={5} xl={6} xxl={6}>
          <Col>Project Management</Col>
          <Col>System Engineering</Col>
        </Row>
      </div>
    </>
  );
};

export default SelfIntro;
