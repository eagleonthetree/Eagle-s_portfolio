import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiRstudio,
  SiMicrosoftexcel,
  SiMysql,
  SiTableau,
  SiHtml5,
  SiCss3,
  SiIbm
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h3 className="title_skill"> Python <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
        <h3 className="title_skill"> R <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3 className="title_skill"> Git <strong className="purple"></strong></h3>
       </Col> 
       <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h3 className="title_skill"> MySQL <strong className="purple"></strong></h3>
       </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <h3 className="title_skill"> Excel <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <h3 className="title_skill"> Tableau <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h3 className="title_skill"> HTML5 <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h3 className="title_skill"> CSS <strong className="purple"></strong></h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIbm />
        <h3 className="title_skill"> SPSS <strong className="purple"></strong></h3>
      </Col>
    </Row>
  );
}

export default Techstack;
