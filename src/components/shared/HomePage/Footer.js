import React from "react";

const Footer = () => {
  return (
    <footer className="bg-custom py-4" style={{ marginTop: "150px" }}>
      <div className="container">
        <div className="row  row-cols-lg-3">
          <div>
            <h3 className="mb-3 text-custom">eBike</h3>
            <p>Best eBike | Greatest Adventure</p>
            <i className="bi bi-geo-alt-fill text-dark">
              {" "}
              1913 Armbrester Drive, CA
            </i>
            <br />
            <i className="bi bi-telephone-fill text-dark"> 714-471-3326</i>
            <br />
            <i className="bi bi-envelope-fill text-dark"> contact@ebike.com</i>
          </div>
          <div>
            <div>
              <i className="bi bi-facebook me-3 fs-4"></i>
              <i className="bi bi-twitter me-3 fs-4"></i>
              <i className="bi bi-linkedin me-3 fs-4"></i>
              <i className="bi bi-youtube fs-4"></i>
              <p className="my-5"> Copyright ©2022 All rights reserved</p>
            </div>
          </div>
          <div>
            <h3 className="text-custom">News Latter</h3>
            <p>
              Wanna get update about our promotion & dicount? Sign up for our
              news latter
            </p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-secondary mt-3">Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
