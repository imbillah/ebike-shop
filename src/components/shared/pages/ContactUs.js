import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../../../media/images/contact.jpg";
import AppBar from "../HomePage/AppBar";
const ContactUs = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Row>
          <Col lg={6}>
            <div className="">
              <h2 className="fw-bold mt-5 text-custom">Contact Us</h2>
              <p className="fst-italic mt-4 text-custom">
                Fill out the form and we will get back to you soon
              </p>
              <form>
                <input
                  type="text"
                  className="form-control "
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <div className="input-group  my-3">
                  <span className="input-group-text text-muted">
                    Your Message
                  </span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    required
                  ></textarea>
                </div>
                <button className="btn bg-custom text-white">Submit</button>
              </form>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={contact}
              className="img-fluid rounded-3 mt-5 h-75"
              alt="aboutus"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
