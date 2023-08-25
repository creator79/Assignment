/* eslint-disable*/
import React from "react";
import "./Css/Banner.css";
import boy from "../assets/images/boy.svg";
import arrow from "../assets/images/arrow.png";
import star from "../assets/images/star.svg";
import starone from "../assets/images/starone.svg";

function Home() {
  return (
    <div className="mainbox">
      <div className="box">
        <div className="box-1">
          <h1 className="fresh"> Fresh</h1>
          <h1 className="num">2022</h1>
          <h1 className="look">Look</h1>
        </div>
        <div className="box-2">
          <img className="image-1" src={star} alt="" />
          <img className="image-2" src={boy} alt="" />
        </div>
      </div>
      <div className="orangebox"></div>
      <div className="line"></div>
      <img className="image-3" src={starone} alt="star" />
      <div className="see">
        <div className="seemore">See more</div>
      </div>
      <img className="img" src={arrow} alt="arrow" />
    </div>
  );
}

export default Home;
