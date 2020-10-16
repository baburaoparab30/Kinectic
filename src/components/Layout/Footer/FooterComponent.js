import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import ContactUsLocationImage from "../../../assets/images/contact-us-location.jpg";

export default function FooterComponent() {
  return (
    <>
      <footer className="footer-container">
        <Row className="footer__top-bar">
          <Col xs lg="3">
            <h5>ABOUT KINECO-KAMAN</h5>
            <ListGroup variant="flush">
              <ListGroup.Item>Home</ListGroup.Item>
              <ListGroup.Item>Company</ListGroup.Item>
              <ListGroup.Item>Products</ListGroup.Item>
              <ListGroup.Item>Capabilities</ListGroup.Item>
              <ListGroup.Item>News & Events</ListGroup.Item>
              <ListGroup.Item>Contact Us</ListGroup.Item>
              <ListGroup.Item>Sitemap</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs lg="3">
            <h5>ABOUT KINECO-KAMAN</h5>
            <p>
              KKCI is a joint venture company between Kineco Group of India and
              Kaman Aerospace of the US. KKCI was established in CY 2012 and
              became operational in CY 2013.
            </p>
            <p>
              KKCI has provided customers with the optimum in product quality,
              integrity, and service since its establishment.
            </p>
            <p>[Read More ...]</p>
          </Col>
          <Col xs lg="3">
            <h5>LATEST NEWS</h5>
            <h6>
              BAE Systems honors Kineco Kaman with a Gold Tier Supplier Award
            </h6>
            <p>13 April 2019</p>
            <h6>
              Kineco Kaman Composites – India Pvt Ltd to Participate in DEFEXPO
              INDIA 2018
            </h6>
            <p>10 April 2018</p>
            <h6>
              Kineco Kaman Health, Safety & Environmental Management System
              Receives ISO-14001 And OHSAS-18001 Certification
            </h6>
            <p>3 November 2017</p>
            <h6>
              Kineco Kaman becomes first Indian private company to put antenna
              into orbit via ISRO
            </h6>
            <p>28 January 2016</p>
            <h6>
              Kineco Kaman Composites – India Dispatches First Lot of Mission
              Consoles to BAE Systems for P-8 Program
            </h6>
            <p>30 June 2015</p>
          </Col>
          <Col xs lg="3">
            <h5>CONTACT US</h5>
            <img src={ContactUsLocationImage} alt="contact_us_location" />
            <h6>Kineco Kaman Composites - India Private Limited</h6>
            <p>Plot No. 60, Pilerne Industrial Estate,</p>
            <p>Pilerne, Bardez, Goa, 403511</p>
            <p>Landline: +91 832 6648888</p>
            <p>Fax No.: +91 832 6648889</p>
            <p>Email: sales@kinecokamanindia.com</p>
            <p>Web: www.kinecokamanindia.com</p>
          </Col>
        </Row>
        <Row className="footer__copyright-bar">
          <Col xs lg="4">
            © 2016 - 2020 | KINECO - KAMAN | All Rights Reserved
          </Col>
          <Col></Col>
          <Col xs lg="3">
            Powered by: Sancoale Technologies
          </Col>
        </Row>
      </footer>
    </>
  );
}
