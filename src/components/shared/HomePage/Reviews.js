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
  }, []);
  return (
    <Container>
      <h2>Our Customer reviews: {reviews.length}</h2>
      <Row>
        {reviews.map((review) => (
          <Col lg={6} key={review._id}>
            <div>
              <div className="d-flex p-2 shadow rounded-3">
                <img
                  src={profile}
                  className="me-3 rounded-circle my-auto"
                  style={{ width: "70px" }}
                  alt=""
                />
                <div className="p-3">
                  <h4>{review.name}</h4>
                  <h6>{review.country}</h6>
                  <p className="text-muted">{review.comment}</p>
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
