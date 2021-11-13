import React from "react";
import { Container } from "react-bootstrap";
const Installation = () => {
  return (
    <Container>
      <h2 className="text-center fw-bold top-margin text-uppercase text-custom mb-2">
        official installation guide
      </h2>
      <h6 className="text-center fw-bold fst-italic mb-5">
        Watch our official DIY eBike installation guide
      </h6>
      <div>
        <iframe
          src="https://www.youtube.com/embed/RPwxwLKfDSw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Installation;
