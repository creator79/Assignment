/* eslint-disable*/
import React from "react";
import { useState, useEffect } from "react";

import "./Css/ProductListing.css";
import arrow from "../assets/images/arrow.png";

const SinglePage = (product) => {
  return (
    <div key={product.id}>
      <div className="display-data">
        <img className="api-image" src={product.image} />
      <img className="arrow" src={arrow} alt="arrow" />
        <p className="pd-name">{product.category.title}</p>
        <p className="pd-des">{product.description}</p>
        <p className="pd-price">${product.price}</p>
      </div>


      
    </div>
  );
};

export default SinglePage;
