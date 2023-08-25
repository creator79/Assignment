/* eslint-disable*/
import React from "react";
import { useState, useEffect } from "react";

// import "./Css/Products.css";

const SinglePage = (product) => {
  return (
    <div key={product.id}>
      <div className="display-data">
        <img className="api-image" src={product.images[0]} />
        <p className="pd-name">{product.category.title}</p>
        <p className="pd-des">{product.description}</p>
        <p className="pd-price">${product.price}</p>
      </div>


      
    </div>
  );
};

export default SinglePage;
