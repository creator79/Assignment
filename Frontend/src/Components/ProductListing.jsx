/* eslint-disable*/
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Css/ProductListing.css";
import SinglePage from "./Products";

function Products() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState(false);
  const [error, setError] = useState(false); // State to track the error

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((err) => {
        console.log(err);
        setError(true); // Set the error state to true if there's an error
      });
  };

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 3.3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleFilter = (name) => {
    setFilters(true);
    let newData = data.filter((e) => {
      if (e.category.name === name) {
        return e;
      }
      if (!name) {
        return e;
      }
      return;
    });
    setFilterData(newData);
  };

  return (
    <div className="productpage">
      <div className="newproducts">New products</div>
      <div className="underline"></div>
      <div className="displaydata">
        <div className="category">
          <p onClick={() => handleFilter("Apparel")}>Apparel</p>
          <p onClick={() => handleFilter("Accessories")}>Accessories</p>
          <p onClick={() => handleFilter("Best sellers")}>Best sellers</p>
          <p onClick={() => handleFilter(" 50% off")}>50% off</p>
        </div>
        <div className="apidata">
          <div>
            {error ? (
              <p className="error-message">Api Limit is Crossed.</p>
            ) : (
              <Slider {...settings}>
                {!filters
                  ? data.map((product) => {
                      return <SinglePage {...product} />;
                    })
                  : filterData.map((e) => <SinglePage {...e} />)}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
