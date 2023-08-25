/* eslint-disable*/
import React from "react";
import "./Css/Navbar.css";
import car from "../assets/images/car.svg";
import facebook from "../assets/images/facebook.svg";
import linkedIn from "../assets/images/linkedIn.svg";
import tw from "../assets/images/tw.svg";
import insta from "../assets/images/insta.svg";

function Navbar() {
  return (
    <div className="topcontainer">
      <div className="one">
        <div className="two">
          <div className="four">
            <img src={car} alt="" /> Free Delivery
          </div>
          <div className="five">Return Policy</div>
        </div>
        <div className="three">
          <div>Login</div>
          <div>follow Us</div>
          <div>
            <img className="socialimg" src={facebook} alt="facebook" />
          </div>
          <div>
            <img className="socialimg" src={linkedIn} alt="linkedIn" />
          </div>
          <div>
            <img className="socialimg" src={tw} alt="twitter" />
          </div>
          <div>
            <img className="socialimg" src={insta} alt="insta" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
