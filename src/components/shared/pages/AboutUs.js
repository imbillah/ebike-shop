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
              <h2 className="fw-bold mt-5 text-custom">About us</h2>
              <p className="text-muted lh-lg mt-3">
                Touropia hotel search allows users to compare hotel prices in
                just a few clicks from more than 300 booking sites for more than
                5.0 million hotels and other types of accommodation in over 190
                countries.
              </p>
              <p className="text-muted lh-lg">
                We help millions of travelers each year compare deals for hotels
                and accommodations. Get information for weekend trips to
                destinations like Penang or Cameron Highlands and you can find
                the right hotel on trivago. Langkawi and its surrounding area
                are great for trips that are a week or longer with the numerous
                hotels available.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={about}
              className="img-fluid rounded-3 mt-4"
              alt="aboutus"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
