import React from "react";
import SliderImage1 from "../../assets/images/slider-products-01.jpg";
import SliderImage2 from "../../assets/images/slider-products-02.jpg";
import SliderImage3 from "../../assets/images/slider-products-03.jpg";
import SliderImage4 from "../../assets/images/slider-products-04.jpg";
import ProductImage1 from "../../assets/images/product-01.jpg";
import ProductImage2 from "../../assets/images/product-02.jpg";
import ProductImage3 from "../../assets/images/product-03.jpg";
import ProductImage4 from "../../assets/images/product-04.jpg";
import ProductImage5 from "../../assets/images/product-05.jpg";
import ProductImage6 from "../../assets/images/product-06.jpg";
import ProductImage7 from "../../assets/images/product-07.jpg";
import ProductImage8 from "../../assets/images/product-08.jpg";
import ProductImage9 from "../../assets/images/product-09.jpg";
import ProductImage10 from "../../assets/images/product-10.jpg";
import CarouselComponent from "../UIComponents/CarouselComponent";
import { Row, Col } from "react-bootstrap";

export default function ProductsComponent() {
  const carouselItems = [
    SliderImage1,
    SliderImage2,
    SliderImage3,
    SliderImage4,
  ];
  return (
    <div className="products-container">
      <div className="container-fluid">
        <div className="carousel__display--container">
          <CarouselComponent carouselItems={carouselItems}></CarouselComponent>
        </div>
        <div className="products__display--container">
          <Row>
            <Col lg="3">
              <img src={ProductImage1} alt="product_image1" />
            </Col>
            <Col lg="3">
              <img src={ProductImage2} alt="product_image2" />
            </Col>
            <Col lg="3">
              <img src={ProductImage3} alt="product_image3" />
            </Col>
            <Col lg="3">
              <img src={ProductImage4} alt="product_image4" />
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <img src={ProductImage5} alt="product_image5" />
            </Col>
            <Col lg="3">
              <img src={ProductImage6} alt="product_image6" />
            </Col>
            <Col lg="3">
              <img src={ProductImage7} alt="product_image7" />
            </Col>
            <Col lg="3">
              <img src={ProductImage8} alt="product_image8" />
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <img src={ProductImage9} alt="product_image9" />
            </Col>
            <Col lg="3">
              <img src={ProductImage10} alt="product_image10" />
            </Col>
            <Col lg="3"></Col>
            <Col lg="3"></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
