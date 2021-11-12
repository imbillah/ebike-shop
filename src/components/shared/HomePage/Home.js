import React from "react";
import AppBar from "./AppBar";
import Banner from "./Banner";
import Footer from "./Footer";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <AppBar />
      <Banner />
      <Products />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
