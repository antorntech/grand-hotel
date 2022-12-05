import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../images/banner/slider1.png";
import slider2 from "../../images/banner/slider2.png";
import slider3 from "../../images/banner/slider3.png";
import "./Slider.css";
import { motion } from "framer-motion"

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>Welcome To</motion.h1>
            <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .4, duration: 1}}>Grand Hotel</motion.h3>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .8, duration: 1}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</motion.p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption>
            <h1>Enjoy Hotel</h1>
            <h3>Grand Hotel</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption>
            <h1>Chill Day</h1>
            <h3>Grand Hotel</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
