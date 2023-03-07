import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiJupyter,
  SiGooglecolab
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <  SiJupyter/>
        <h3 className="title_skill"> jupyter Notebook <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3 className="title_skill"> VScode <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <h3 className="title_skill"> Colab <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h3 className="title_skill"> Heroku <strong className="purple"></strong></h3>
      </Col>
    </Row>
  );
}

export default Toolstack;
