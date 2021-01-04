import React from "react";
import "../style.css";

const Card = (props) => {
  return (
    <div className="box">
      <h2 className="name">Air Max 270</h2>
      <img className="product" src={props.img} alt="Nike Shoes" />
      <div className="circle"></div>
      <a href="#" className="buy">
        Buy Now
      </a>
    </div>
  );
};

export default Card;
