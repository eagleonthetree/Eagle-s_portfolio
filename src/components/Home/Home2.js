import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body">
            I am a graduate from <b className="purple"> The University of Hong Kong </b> in 2022 Majoring <b className="purple"> Social Data Science </b> and minoring Sociology. 
              <br />
              <br />
              I am experienced in programming languages like
              <i>
                <b className="purple"> Python and R </b>
              </i>
              <br />
              <br />
              I am interested in doing &nbsp;
                <b className="purple">data analysis </b> and <b className="purple">data visualization</b>{" "}
                on different topics. &nbsp;
                Occasionally, i also build Applications with React.js
              
            
            </p>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
