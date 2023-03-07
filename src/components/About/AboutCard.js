import React from "react";
import Card from "react-bootstrap/Card";
import { GoPrimitiveDot } from "react-icons/go";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            <b className="purple"> Apart</b> from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GoPrimitiveDot /> Video Games
            </li>
            <li className="about-activity">
              <GoPrimitiveDot /> Exercise
            </li>
            <li className="about-activity">
              <GoPrimitiveDot /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning data into insights"{" "}
          </p>
          <footer className="blockquote-footer">Eagle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
