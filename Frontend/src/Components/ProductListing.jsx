/*eslint-disable*/
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Css/ProductListing.css";
import SinglePage from "./Products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Products() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState(false);
  const [error, setError] = useState(false); // State to track the error
  const sliderRef = useRef(null); // Reference to the Slider component

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = () => {
    fetch("https://fakestoreapi.com/products")
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
          slidesToScroll: 1, // Change this to 1 for better navigation on small screens
        },
      },
    ],
  };

  const handleFilter = (name) => {
    setFilters(true);
    let newData = data.filter((e) => {
      if (e.category === name) {
        return e;
      }
      if (!name) {
        return e;
      }
      return null; // Return null instead of undefined
    });
    setFilterData(newData);
    sliderRef.current.slickGoTo(0); // Reset slider position when changing filters
  };
  return (
    <div className="productpage">
      <div className="newproducts">New products</div>
      <div className="underline"></div>
      <div className="displaydata">
        <div className="category">
        <p onClick={() => handleFilter("electronics")}>Apparel</p>
          <p onClick={() => handleFilter("jewelery")}>Accessories</p>
          <p onClick={() => handleFilter("men's clothing")}>Best sellers</p>
          <p onClick={() => handleFilter("women's clothing")}>50% off</p>
        </div>
        <div className="carousel-navigation">
            <button
              className=" prev-button"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft />
            </button>
           
          </div>
        <div className="apidata">
      
          {error ? (
            <p className="error-message">Api Limit is Crossed.</p>
          ) : (
            <Slider ref={sliderRef} {...settings}>
              {!filters
                ? data.map((product) => {
                    return <SinglePage key={product.id} {...product} />;
                  })
                : filterData.map((e) => <SinglePage key={e.id} {...e} />)}
            </Slider>
          )}
         
        </div>
        <div className="carousel-navigation">
        <button
              className=" next-button"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaChevronRight />
            </button>
        </div>
      </div>
    </div>
  );
}
export default Products;
