import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "../HomePage/AppBar";
import about from "../../../media/images/about.jpg";
const AboutUs = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Row>
          <Col lg={6}>
            <div className="">
              <h2 className="fw-bold mt-5 text-custom">
                Welcome to The eBike Shop
              </h2>
              <p className="text-muted lh-lg mt-3 lead">
                Whether you’re looking for a more efficient way to get around,
                more fun on the trails, or just want to enjoy the great
                outdoors, electric bikes can really open up the world of
                riding.We believe that electric bikes are the future. Letting
                more people get out onto two wheels, getting people out of
                traffic jams, and helping friends and families spend more time
                together are just some of the benefits that became the driving
                force behind The Electric Bike Shop.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={about}
              className="img-fluid rounded-3 mt-5"
              alt="aboutus"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
