import React from "react";
import Card from "../../Components/Cards/Cards";
import greenImg from "../../Assets/images/nike1.png";
import redImg from "../../Assets/images/nike2.png";
import blueImg from "../../Assets/images/nike3.png";

const sourcedata = [
  {
    img: redImg,
    color: "#fa393a",
  },
  {
    img: greenImg,
    color: "#9bdc28",
  },
  {
    img: blueImg,
    color: "#397bf7",
  },
];

const ParallaxCard = () => {
  return (
    <>
      <div className="bg">
        <div className="container">
          {sourcedata.map((val) => {
            return <Card img={val.img} color={val.color} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ParallaxCard;
