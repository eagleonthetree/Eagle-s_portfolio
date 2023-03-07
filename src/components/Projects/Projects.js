import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import website from "../../Assets/Projects/website.PNG";
import twitter from "../../Assets/Projects/twitter.png";
import NYC from "../../Assets/Projects/NYC.PNG";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Projects() {
  return (
    <div id="project">
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Esports and gaming community on Twitter: A social network and content analysis approach"
              description="This research aims to understand the attitudes of Twitter users towards Esports, identify the key influencers, and analyze the network structures. Content sentiment analysis and social network analysis are done using Twitter data with relevant hashtags and keywords
              "
              ghLink="https://github.com/eagleonthetree/FYP/blob/main/BSDS4999%20final%20report.pdf"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NYC}
              isBlog={false}
              title="EDA on NYC subway"
              description="An Exploratory Data Analysis and visualization of the NYC subway ridership.User are able to filter out certian stations and view the stations with the most ridership "
              
              demoLink="https://public.tableau.com/app/profile/eagle.wong"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Offical website for District councilor"
              description="Set up an official website that provides valuable information to residents in the Wong Tai Sin district.The website also includes a dashboard visualizing data related to that district using Plotly."
              ghLink="https://github.com/eagleonthetree/Offical-website-for-District-councilor"
                          
            />
          </Col>


        </Row>
      </Container>
      <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eagleonthetree"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eagle-wong/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rmt_egl/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Projects;
