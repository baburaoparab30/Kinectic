import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import KinecoKamanLogo from "../../../assets/images/kineco-kaman-logo.png";
import { Navbar, Nav, NavDropdown, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <>
      <header className="header-container sticky-top">
        <Container fluid>
          <Row className="header__top--bar">
            <Col lg="5">
              <span className="contact-widget">
                <i>
                  <FaPhoneAlt size={14} />
                </i>
                +91 832 6648888
              </span>
              <span>
                <i>
                  <GrMail size={18} />
                </i>
                sales@kinecokamanindia.com
              </span>
            </Col>
            <Col lg="5"></Col>
            <Col lg="2" className="search-widget">
              <span>
                <IconContext.Provider value={{ className: "fa--search" }}>
                  <i>
                    <FaSearch size={18} />
                  </i>
                </IconContext.Provider>
                Search
              </span>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Navbar
                collapseOnSelect
                className="header__nav--bar"
                expand="lg"
                bg="light"
                variant="light"
              >
                <Col lg="5">
                  <Navbar.Brand className="nav__logo--section" href="#home">
                    <img src={KinecoKamanLogo} alt="Kineco_kaman_logo" />
                  </Navbar.Brand>
                </Col>
                <Col lg="7">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link as={Link} to="/">
                        HOME
                      </Nav.Link>
                      <span className="nav__bar--divider"></span>
                      <NavDropdown
                        title="COMPANY"
                        id="collasible-nav-dropdown"
                        renderMenuOnMount={true}
                      >
                        <NavDropdown.Item href="#action/3.1">
                          ABOUT US
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          LEADERSHIP
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          PHOTO GALLERY
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          VIDEOS
                        </NavDropdown.Item>
                      </NavDropdown>
                      <span className="nav__bar--divider"></span>
                      <Nav.Link as={Link} to="/products">
                        PRODUCTS
                      </Nav.Link>
                      <span className="nav__bar--divider"></span>
                      <NavDropdown
                        title="CAPABILITIES"
                        id="collasible-nav-dropdown"
                        renderMenuOnMount={true}
                      >
                        <NavDropdown.Item href="#action/3.1">
                          INFRASTRUCTURE
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          ENGINEERING
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          QUALITY
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          TESTING CAPABILITIES
                        </NavDropdown.Item>
                      </NavDropdown>
                      <span className="nav__bar--divider"></span>
                      <Nav.Link as={Link} to="/news-and-events">
                        NEWS & EVENTS
                      </Nav.Link>
                      <span className="nav__bar--divider"></span>
                      <Nav.Link as={Link} to="/contact">
                        CONTACT US
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
