/*eslint-disable*/
import React, { useRef, useState } from "react";
import "./Css/LinkNav.css";
import { FaBars, FaTimes } from "react-icons/fa";

function LinkNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbody">
      <header style={{ backgroundColor: "black" }}>
        <p className="shopkart">ShopKart</p>

        <nav
          ref={navRef}
          className={isNavOpen ? "responsive_nav visibility" : "nav-close-btn visibility"}
        >
          <a href="/#">HOME</a>
          <a href="/#">ABOUT</a>
          <a href="/#">
            <select
              style={{
                backgroundColor: "black",
                color: "white",
                outline: "none",
                border: "none",
                borderBottom: "1px solid white",
                cursor:"pointer",
              }}
              name=""
              id=""
            >
             
  <option value=""  style={{ backgroundColor: "black", color: "white" }}>OUR PRODUCTS</option>
  <option value="" style={{ backgroundColor: "black", color: "white" }}>
    PRODUCT 1
  </option>
  <option value="" style={{ backgroundColor: "black", color: "white" }}>
    PRODUCT 2
  </option>
  <option value="" style={{ backgroundColor: "black", color: "white" }}>
    PRODUCT 3
  </option>
  <option value="" style={{ backgroundColor: "black", color: "white" }}>
    PRODUCT 4
  </option>
            </select>
          </a>
          <a href="/#">CONTACT US</a>
        </nav>
        <button className="nav-btn" onClick={toggleNavbar}>
          {isNavOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
        </button>
      </header>
    </div>
  );
}

export default LinkNav;
