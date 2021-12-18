import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "#395BE1",
  },
  Carousel: {
    marginTop: "20px",
  },
  a: {
    cursor: "pointer",
  },
}));

export default function CarouselBox() {
  const classes = useStyles();
  return (
    <Carousel fade className={classes.Carousel}>
      <Carousel.Item>
        <a
          className={classes.a}
          onClick={() =>
            window.open(
              "https://inosmi.ru/politic/20211202/251039453.html?utm_source=yxnews&utm_medium=desktop"
            )
          }
        >
          <img
            className="d-block w-100"
            src="https://ichef.bbci.co.uk/news/1024/branded_russian/CD4E/production/_116085525_tass_1464942.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className={classes.label}>Встреча Президентов</h3>
            <p>
              Состоялась встреча президентов Соединённых штатов Америки и России
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          className={classes.a}
          onClick={() =>
            window.open(
              "https://inosmi.ru/politic/20211202/251039453.html?utm_source=yxnews&utm_medium=desktop"
            )
          }
        >
          <img
            className="d-block w-100"
            src="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/54/72/90/55/f86255140cd7.jpeg"
            alt="Second slide"
          />
        </a>
        <Carousel.Caption>
          <h3 className={classes.label}>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a
          className={classes.a}
          onClick={() =>
            window.open(
              "https://inosmi.ru/politic/20211202/251039453.html?utm_source=yxnews&utm_medium=desktop"
            )
          }
        >
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
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
