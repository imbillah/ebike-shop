import React from "react";
import { Container } from "react-bootstrap";
import AddReview from "../../dashboard/user/AddReview";
import AppBar from "./AppBar";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <AppBar />
      <Products />
      <Reviews />
    </>
  );
};

export default Home;