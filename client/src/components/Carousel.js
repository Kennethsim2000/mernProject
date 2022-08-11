import { faChainSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Carousel } from "react-bootstrap";
import Greece from "../assets/Greece.jpg";
import hotairbal from "../assets/hotairbal.jpg";
import mountain from "../assets/mountain.jpg";


function ControlledCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1200}>
        <img
          className="d-block w-100"
          src={Greece}
          alt="First slide"
          height={700}
        />
        <Carousel.Caption>
          <h3 style={{color:"white", fontFamily:"sans-serif"}} >Visit Europe!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600}>
        <img
          className="d-block w-100"
          src={hotairbal}
          alt="Second slide"
          height={700}
        />
        <Carousel.Caption>
          <h3>Visit America!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mountain}
          alt="Third slide"
          height={700}
        />
        <Carousel.Caption>
          <h3 style={{color:"white, fontFamily: sans-serif"}}>Visit Asia!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
