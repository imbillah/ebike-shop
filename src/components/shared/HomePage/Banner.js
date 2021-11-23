import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from "../../../media/images/banner1.jpg";
import banner2 from "../../../media/images/banner2.jpeg";
import banner3 from "../../../media/images/banner3.jpeg";

const bgBlur = {
  filter: "brightness(60%)",
};
const Banner = () => {
  return (
    <Carousel fade className="mt-sm-5">
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="First slide" />
        <Carousel.Caption>
          <h1 className="fw-bold text-white">
            Best eBike | Greatest Adventure
          </h1>
          <h5 className="fw-bold text-white fst-italic">
            Top Quality ebike collection with affordable price
          </h5>
          <Link to="/explore">
            <Button className="bg-custom px-3 py-2 my-3 fw-bold">
              SHOP NOW
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
        <Carousel.Caption>
          <h1 className="fw-bold  text-white">
            eBike for All Group of Customers
          </h1>
          <h5 className="fw-bold text-white fst-italic">
            We have happy customer of all groups & agaes
          </h5>
          <Link to="/explore">
            <Button className="bg-custom px-3 py-2 my-3 fw-bold">
              SHOP NOW
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          style={bgBlur}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="fw-bold text-white">
            Grabe The Best Deal & Promotion
          </h1>
          <h5 className="fw-bold text-white fst-italic">
            We have the best promotional deals and offers available.
          </h5>
          <Link to="/explore">
            <Button className="bg-custom px-3 py-2 my-3 fw-bold">
              SHOP NOW
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
