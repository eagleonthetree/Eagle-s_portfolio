import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link'
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiOutlinePhone,
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="https://eagleonthetree.github.io/portfolio/#/" className="d-flex">
          <img src={logo} className="w3-round" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#Home">
          <Nav.Item>
              <NavHashLink style={{ textDecoration: 'none' }}
                to="/#home" class="ms-auto" >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> 
                Home
              </NavHashLink>
            </Nav.Item>
            <Nav.Item>
              <NavHashLink style={{ textDecoration: 'none' }}
                to="/#AboutS" class="ms-auto"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> 
                About
              </NavHashLink>
            </Nav.Item>

            <Nav.Item>
              <NavHashLink style={{ textDecoration: 'none' }}
                to="/#project" class="ms-auto"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </NavHashLink>
            </Nav.Item>


          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
