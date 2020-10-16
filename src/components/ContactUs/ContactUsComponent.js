import React from "react";
import { Row, Col, FormControl, Form, Button } from "react-bootstrap";
import CarouselComponent from "../UIComponents/CarouselComponent";
import SliderImage1 from "../../assets/images/slider-home-02.jpg";
import SliderImage2 from "../../assets/images/slider-home-04.jpg";
import SliderImage3 from "../../assets/images/slider-home-05.jpg";
import SliderImage4 from "../../assets/images/slider-home-06.jpg";
import SliderImage5 from "../../assets/images/slider-products-01.jpg";
import SliderImage6 from "../../assets/images/slider-products-02.jpg";
import SliderImage7 from "../../assets/images/slider-products-03.jpg";
import SliderImage8 from "../../assets/images/slider-products-04.jpg";
import SliderImage9 from "../../assets/images/slider-news-01.jpg";
import SliderImage10 from "../../assets/images/slider-news-02.jpg";
import SliderImage11 from "../../assets/images/slider-about-us-02.jpg";
import SliderImage12 from "../../assets/images/slider-about-us-03.jpg";
import SliderImage13 from "../../assets/images/slider-about-us-04.jpg";
import SliderImage14 from "../../assets/images/slider-about-us-05.jpg";
import SliderImage15 from "../../assets/images/antenna-isro.jpg";
import SliderImage16 from "../../assets/images/bae-poseidon.jpg";

export default function ContactUsComponent() {
  const carouselItems = [
    SliderImage1,
    SliderImage2,
    SliderImage3,
    SliderImage4,
    SliderImage5,
    SliderImage6,
    SliderImage7,
    SliderImage8,
    SliderImage9,
    SliderImage10,
    SliderImage11,
    SliderImage12,
    SliderImage13,
    SliderImage14,
    SliderImage15,
    SliderImage16,
  ];
  return (
    <div className="contact-us-container">
      <div className="contact__us--content">
        <Row>
          <Col lg="9">
            <Row className="contact__us--map">
              <Col lg="12">
                <iframe
                  title="contact-us-map"
                  width="600"
                  height="300"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.1842168678972!2d73.79348421426975!3d15.528252157833618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc034d9f2962d%3A0xc1030a20a5bc1f99!2sKineco+Kaman+Composite+Structure!5e0!3m2!1sen!2sin!4v1457443872293"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <p>
                  We respond to all customer feedback and look forward to
                  hearing from you!
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg="3">
            <Row>
              <Col lg="12">
                <h6>SEARCH</h6>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <FormControl
                  placeholder="Type and hit enter..."
                  aria-label="Search"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <hr />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h6>PHOTO GALLERY</h6>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <CarouselComponent
                  carouselItems={carouselItems}
                ></CarouselComponent>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="4" className="contact__us--form">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg="4" className="contact__us--address">
            <p>
              <strong>Kineco Kaman Composites – India Private Limited</strong>
            </p>
            <p>Plot No. 60, Pilerne Industrial Estate,</p>
            <p>Pilerne, Bardez, Goa, 403511</p>
            <p>Landline: +91 832 6648888</p>
            <p>Fax No.: +91 832 6648889</p>
            <p>
              Email: <span>sales@kinecokamanindia.com</span>
            </p>
            <p>
              Web: <span>www.kinecokamanindia.com</span>
            </p>
          </Col>
          <Col lg="4"></Col>
        </Row>
      </div>
    </div>
  );
}
