import React from "react";

const Total = (props) => {
  const total = props.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  );
  console.log(total);
  return <p>TOTALLLZZ: {total}</p>;
};
export default Total;
