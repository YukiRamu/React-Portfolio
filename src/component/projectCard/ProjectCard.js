import React from 'react';
import "./ProjectCard.scss";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";

const ProjectCard = () => {
  return (
    <>
      <h2># Featured Project</h2>
      <Row xs={1} md={2} lg={3} xl={3} xxl={4}>
        <Col>
          <Card className='project'>
            <Card.Img variant="top" src="./img/project1.png" alt='project1' />
            <Card.Body className='projectDescription'>
              <Card.Title>Expense Trackify</Card.Title>
              <Card.Text>
                Full-stack application build with React, Redux toolkit, Node.js, Express.js, Mongo DB. Deployed on AWS and Heroku. You have secure authentication and can manage expense and income. Various types of charts available. *Team Project
              </Card.Text>
              <a target="_blank" href='https://github.com/VikiSevcikova/expense-tracker'><GoMarkGithub />Front-end</a>
              <a target="_blank" href='https://github.com/VikiSevcikova/expense-tracker-backend'><GoMarkGithub />backend</a>
              <a target="_blank" href='https://expense-trackify-app.herokuapp.com/login'><GoLinkExternal />View Project</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='project'>
            <Card.Img variant="top" src="./img/project2.png" alt='project2' />
            <Card.Body className='projectDescription'>
              <Card.Title>Redux To Do List</Card.Title>
              <Card.Text>
                Fully responsive To Do List App created with React.js and Redux toolkit. Data is stored in the local storage.
              </Card.Text>
              <a target="_blank" href='https://github.com/YukiRamu/React-Redux-To-Do-List'><GoMarkGithub /></a>
              <a target="_blank" href='https://yukiramu.github.io/React-Redux-To-Do-List/'><GoLinkExternal />View Project</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='project'>
            <Card.Img variant="top" src="./img/project3.png" alt='project3' />
            <Card.Body className='projectDescription'>
              <Card.Title>React Weather App</Card.Title>
              <Card.Text>
                Build with React.js and Context API. Data is stored in the local storage. Daily forecast and weekly forcast for cities around world available.
              </Card.Text>
              <a target="_blank" href='https://github.com/YukiRamu/React-Weather-App'><GoMarkGithub /></a>
              <a target="_blank" href='https://yukiramu.github.io/React-Weather-App/'><GoLinkExternal />View Project</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='project'>
            <Card.Img variant="top" src="./img/project4.png" alt='project4' />
            <Card.Body className='projectDescription'>
              <Card.Title>Cinema Booking App</Card.Title>
              <Card.Text>
                Movie Data Populated from The Movie DB API. You can search and view detail of movies. Additionally, you can book a theater of your choice with the seat selection. Seat booking data stored in Local Storage. Built with HTML SCSS, JavaScript OOP, Bootstrap Responsive design.
              </Card.Text>
              <a target="_blank" href='https://github.com/YukiRamu/Movie-Theater-Booking.git'><GoMarkGithub /></a>
              <a target="_blank" href='https://yukiramu.github.io/Movie-Theater-Booking/'><GoLinkExternal />View Project</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='project'>
            <Card.Img variant="top" src="./img/project5.png" alt='project5' />
            <Card.Body className='projectDescription'>
              <Card.Title>Recipe Finder</Card.Title>
              <Card.Text>
                Recipe Data populated from Edaman API. You can search, view, and bookmark recipes. User's bookmark and color theme preference are saved in Local Storage. Mini stopwatch feature available. Buit with HTML, SCSS, and JavaScript.
              </Card.Text>
              <a target="_blank" href='https://github.com/YukiRamu/Recipe-Finder'><GoMarkGithub /></a>
              <a target="_blank" href='https://yukiramu.github.io/Recipe-Finder/'><GoLinkExternal />View Project</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='project'>
            <Card.Img variant="top" src="./img/project6.png" alt='project6' />
            <Card.Body className='projectDescription'>
              <Card.Title>The 3C Sense Company Website</Card.Title>
              <Card.Text>
                WordPress project for The 3C Sense which organizes personalized events and creates creative gifts for customers. The website is created by Elementor.
              </Card.Text>
              <a target="_blank" href='https://brandidea.com.br/clients/the3csense/'><GoLinkExternal />View Project</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProjectCard;
