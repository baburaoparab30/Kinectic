import React from "react";
import SliderImage1 from "../../assets/images/slider-news-01.jpg";
import SliderImage2 from "../../assets/images/slider-news-02.jpg";
import CarouselComponent from "../UIComponents/CarouselComponent";
import GoldTierAwardImage from "../../assets/images/gold-tier-award-thumbnail.jpg";
import DefExpoImage from "../../assets/images/def-expo-2018-thumbnail.jpg";
import ISOCertImage from "../../assets/images/iso-cert-thumbnail.jpg";
import BAEPoseImage from "../../assets/images/bae-poseidon-thumbnail.jpg";
import AntennaIsroImage from "../../assets/images/antenna-isro-thumbnail.jpg";
import { Row, Col } from "react-bootstrap";

export default function NewsEventsComponent() {
  const carouselItems = [SliderImage1, SliderImage2];
  return (
    <div className="news-events-container">
      <div className="container-fluid">
        <div className="carousel__display--container">
          <CarouselComponent carouselItems={carouselItems}></CarouselComponent>
        </div>
        <div className="news__events--content">
          <Row>
            <Col lg="6">
              <Row className="news__events--items">
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
              <Row className="news__events--items">
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
              <Row className="news__events--items">
                <Col lg="3">
                  <img src={BAEPoseImage} alt="gold_tier_award" />
                </Col>
                <Col lg="7">
                  <h5>
                    Kineco Kaman Composites – India Dispatches First Lot of
                    Mission Consoles to BAE Systems for P-8 Program
                  </h5>
                  <p>30 June 2015</p>
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <Row className="news__events--items">
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
              <Row className="news__events--items">
                <Col lg="3">
                  <img src={AntennaIsroImage} alt="gold_tier_award" />
                </Col>
                <Col lg="7">
                  <h5>
                    Kineco Kaman becomes first Indian private company to put
                    antenna into orbit via ISRO
                  </h5>
                  <p>28 January 2016</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
