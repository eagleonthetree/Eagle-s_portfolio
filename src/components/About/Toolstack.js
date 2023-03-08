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
        <h5 className="title_skill"> jupyter Notebook <strong className="purple"></strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5 className="title_skill"> VScode <strong className="purple"></strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <h5 className="title_skill"> Colab <strong className="purple"></strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5 className="title_skill"> Heroku <strong className="purple"></strong></h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
