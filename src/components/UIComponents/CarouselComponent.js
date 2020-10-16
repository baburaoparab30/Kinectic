import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent({ carouselItems }) {
  return (
    <Carousel className="carousel-container">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item} alt={`${index}_slide`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
