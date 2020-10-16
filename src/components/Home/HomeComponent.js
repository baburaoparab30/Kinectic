import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import SliderImage1 from "../../assets/images/slider-home-01.jpg";
import SliderImage2 from "../../assets/images/slider-home-02.jpg";
import SliderImage3 from "../../assets/images/slider-home-03.jpg";
import SliderImage4 from "../../assets/images/slider-home-04.jpg";
import SliderImage5 from "../../assets/images/slider-home-05.jpg";
import SliderImage6 from "../../assets/images/slider-home-06.jpg";
import AboutUsImage from "../../assets/images/about-us.jpg";
import LeadershipTeamImage from "../../assets/images/leadership-team.jpg";
import KinecoKamanVideosImage from "../../assets/images/kineco-kaman-videos.jpg";
import GoldTierAwardImage from "../../assets/images/gold-tier-award-thumbnail.jpg";
import DefExpoImage from "../../assets/images/def-expo-2018-thumbnail.jpg";
import ISOCertImage from "../../assets/images/iso-cert-thumbnail.jpg";
import CarouselComponent from "../UIComponents/CarouselComponent";

export default function HomeComponent() {
  const carouselItems = [
    SliderImage1,
    SliderImage2,
    SliderImage3,
    SliderImage4,
    SliderImage5,
    SliderImage6,
  ];
  return (
    <div className="home-container">
      <div className="container-fluid">
        <div className="carousel__display--container">
          <CarouselComponent carouselItems={carouselItems}></CarouselComponent>
        </div>
        <div className="welcome__display--container">
          <h2>WELCOME TO KINECO KAMAN</h2>
          <p>
            Kineco Kaman Composites India (KKCI) is a multinational joint
            venture between Kaman Aerospace Group (USA) and Kineco Limited
            (India). The JV is set up with its headquarters and manufacturing
            facility based in Goa with an objective of addressing the growing
            needs of global aerospace and defence companies. The company
            manufactures advanced composite structural parts and assemblies for
            aerospace and defence applications using carbon and glass fiber
            materials and autoclave curing technology.
          </p>
          <p>Read More...</p>
        </div>
        <div className="about__company-info--container">
          <Row>
            <Col lg="6" className="about__kineco--container">
              <h2>ABOUT KINECO</h2>
              <p>
                Kineco’s Advanced Composite Division’s manufacturing facilities
                and business has already been producing complex composite
                structures for various industries including Aerospace, Defense
                and Medical Imaging
              </p>
              <p>Read More...</p>
            </Col>
            <Col lg="6" className="about__kaman--container">
              <h2>ABOUT KAMAN</h2>
              <p>
                For the past 70 years Kaman has been recognized for technical
                breakthroughs and innovative solutions to critical challenges in
                both Aerospace and Industrial Distribution segments.
              </p>
              <p>Read More...</p>
            </Col>
          </Row>
        </div>
        <div className="aboutus__leadership-info--container">
          <Row>
            <Col lg="4" className="about__us--container">
              <Card>
                <Card.Title>
                  <h3>ABOUT US</h3>
                </Card.Title>
                <Card.Body>
                  <Card.Img variant="top" src={AboutUsImage} />
                  <Card.Text>
                    KKCI is a joint venture company between Kineco Group of
                    India and Kaman Aerospace of the US. KKCI was established in
                    CY 2012
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="leadership__info--container">
              <Card>
                <Card.Title>
                  <h3>LEADERSHIP</h3>
                </Card.Title>
                <Card.Body>
                  <Card.Img variant="top" src={LeadershipTeamImage} />
                  <Card.Text>
                    An Innovative partnership for industry. Combining advantages
                    for both companies resulting in added value to customers
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="video__display--container">
              <Card>
                <Card.Title>
                  <h3>VIDEOS</h3>
                </Card.Title>
                <Card.Body>
                  <Card.Img variant="top" src={KinecoKamanVideosImage} />
                  <Card.Text>
                    Our total solution support capabilities are world class in
                    terms of low cost, high quality, and on-time delivery of
                    products to our customers
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="latest__news-container">
          <Row className="latest__news-content">
            <Col lg="6">
              <Row>
                <Col lg="12">
                  <h3>LATEST NEWS</h3>
                </Col>
              </Row>
              <Row className="latest__news-items">
                <Col lg="3">
                  <img src={GoldTierAwardImage} alt="gold_tier_award" />
                </Col>
                <Col lg="7">
                  <h5>
                    BAE Systems honors Kineco Kaman with a Gold Tier Supplier
                    Award
                  </h5>
                  <p>13 April 2019</p>
                </Col>
              </Row>
              <Row className="latest__news-items">
                <Col lg="3">
                  <img src={DefExpoImage} alt="gold_tier_award" />
                </Col>
                <Col lg="7">
                  <h5>
                    Kineco Kaman Composites – India Pvt Ltd to Participate in
                    DEFEXPO INDIA 2018
                  </h5>
                  <p>10 April 2018</p>
                </Col>
              </Row>
              <Row className="latest__news-items">
                <Col lg="3">
                  <img src={ISOCertImage} alt="gold_tier_award" />
                </Col>
                <Col lg="7">
                  <h5>
                    Kineco Kaman Health, Safety & Environmental Management
                    System Receives ISO-14001 And OHSAS-18001 Certification
                  </h5>
                  <p>3 November 2017</p>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col lg="9"></Col>
                <Col lg="3">
                  <p>Read More...</p>
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <Row>
                <Col lg="12">
                  <h3>CORPORATE VIDEO</h3>
                </Col>
              </Row>
              <Row className="corporate__video-container">
                <Col lg="12">
                  <iframe
                    src="https://www.youtube.com/embed/btezAMuPu14?feature=oembed"
                    frameBorder="0"
                    width="550"
                    height="300"
                    title="corporate__video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
