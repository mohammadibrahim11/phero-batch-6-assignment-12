import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mt-5 mb-5">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/y80hdvk/Apple-Mac-Book-Air-core-i5-2014-4-256-GB.jpg"
              className="d-block w-50 h-50 position"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://i.ibb.co/bLR2GfL/Dell-Latitude-7280.jpg"
              alt=""
              className="d-block w-50 h-50 position"
            />
          </div>
          <div className="carousel-item h-50">
            <img
              src="https://i.ibb.co/SKq5V4T/HP-All-in-One-24-df1224-PC.jpg"
              className="d-block w-50 h-50 position"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
