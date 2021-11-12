import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppBar from "../HomePage/AppBar";

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://protected-oasis-88562.herokuapp.com/products").then((res) =>
      setProducts(res.data)
    );
  }, []);
  return (
    <>
      <AppBar />
      <Container>
        <h1>Our All Available Products</h1>
        <Row className=" g-3">
          {products.map((product) => (
            <Col lg={4} kew={product._id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="h-75 img-fluid"
                />
                <Card.Body>
                  <Card.Title>{product.pname}</Card.Title>
                  <small>By {product.brand}</small>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Title>${product.price}</Card.Title>
                  <p>
                    <small>{product.order} Ordered</small>
                  </p>
                  <Link to={`/order/${product._id}`}>
                    <Button variant="primary">Add to cart</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ExploreProducts;
