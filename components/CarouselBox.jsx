import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "black",
  },
  Carousel: {
    // marginTop: "20px",
  },
}));

export default function CarouselBox() {
  const classes = useStyles();
  return (
    <Carousel fade className={classes.Carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ichef.bbci.co.uk/news/1024/branded_russian/CD4E/production/_116085525_tass_1464942.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={classes.label}>Встреча Президентов</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/54/72/90/55/f86255140cd7.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={classes.label}>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.euronews.com/articles/stories/06/17/78/60/1440x810_cmsv2_0d4b74b5-d67f-55ff-938e-9eafa5f10434-6177860.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={classes.label}>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
