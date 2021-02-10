import React from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel"
import data from "./data";


const Matches = () => {
  return (
    <>
    <Carousel>
  {data.map(match => (
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={match.date}
      alt={match.promotion}
    />
      <h3>{match.title}</h3>
      <h3>{match.rating}</h3>
      <h3>{match.date}</h3>
      <h3>{match.promotion}</h3>
  </Carousel.Item>
  ))}
</Carousel>
    </>
  );
};
export default Matches; 