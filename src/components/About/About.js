import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Home2 from "../Home/Home2"
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
function About() {
  return (
  <section class="curved">
    <div id="AboutS">
    <Container fluid className="about-section">
      <Particle />
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            
          >
            <Home2 />
          
          </Col>
          
          <Col md={4} className="myAvtar">
          <Aboutcard /> 
            <Tilt>
              <img src={myImg} className="logoface" alt="avatar" width="100" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> 
        </h1>
        <Toolstack />

        
      </Container>
    </Container>
    </div>
  </section> 
  );
}

export default About;
