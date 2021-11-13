import React from "react";
import { Link } from "react-router-dom";
import image from "../../../media/images/error.jpg";
const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">You have followed a bad url 😓</h2>
      <div>
        <img src={image} className="img-fluid w-50" alt="" />
      </div>
      <Link to="/">
        <button className="btn bg-custom mt-5 py-2 px-4 fw-bold text-white">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
