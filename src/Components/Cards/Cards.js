import React from "react";
import "./style.css";
import Tilt from "react-parallax-tilt";

const Card = (props) => {
  return (
    <>
      <Tilt className="box" transitionSpeed={400} perspective={1000}>
        <div className="inner-element">
          <div>
            <h2 className="name">Air Max 270</h2>
            <img className="product" src={props.img} alt="Nike Shoes" />
            <div
              className="circle"
              style={{ backgroundColor: `${props.color}` }}
            ></div>
            <a
              href="#"
              className="buy"
              style={{
                backgroundColor: `${props.color}`,
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default Card;
