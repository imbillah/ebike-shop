import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import profile from "../../../media/images/profile.png";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios("https://protected-oasis-88562.herokuapp.com/reviews").then((res) =>
      setReviews(res.data)
    );
  }, [reviews]);
  return (
    <Container>
      <div className="text-center top-margin text-uppercase text-custom mb-5">
        <h6 className="fw-bold">Our Inspiration</h6>
        <h2 className="fw-bold">Customer Review & Testimonial</h2>
      </div>

      <Row>
        {reviews.map((review) => (
          <Col lg={6} key={review._id}>
            <div className="rd-custom">
              <div className="d-flex p-2 shadow rounded-3">
                <img
                  src={profile}
                  className="me-3 rounded-circle my-auto"
                  style={{ width: "70px" }}
                  alt=""
                />
                <div className="p-3">
                  <h3>{review.name}</h3>
                  <h6>From {review.country}</h6>
                  <p className="text-muted lh-lg mt-3">{review.comment}</p>
                  <h6>
                    {`${review.ratings} `}
                    <Rating
                      readonly
                      emptySymbol="bi bi-star"
                      fullSymbol="bi bi-star-fill"
                      initialRating={review.ratings}
                    ></Rating>
                  </h6>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
