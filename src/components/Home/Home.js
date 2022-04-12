import React from "react";
import Rooms from "../Rooms/Rooms";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
