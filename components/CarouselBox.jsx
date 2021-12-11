import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{
            display: "block",
            height: "200px",
            width: "400px",
          }}
          src="../components/icons/slider.png"
        />
        <Carousel.Caption>
          <h3>Forest image</h3>
          <p>Loremore</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ display: "block", height: "200px", width: "400px" }}
          src="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/54/72/90/55/f86255140cd7.jpeg"
        />
        <Carousel.Caption>
          <h3>Forest image</h3>
          <p>Loremore</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
