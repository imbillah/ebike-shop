import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://protected-oasis-88562.herokuapp.com/products").then((res) =>
      setProducts(res.data)
    );
  }, []);
  return (
    <Container>
      <h2 className="text-center fw-bold top-margin text-uppercase text-custom mb-5">
        Our featured collection
      </h2>
      {products.length === 0 ? (
        <div className="container text-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
        <Row className=" g-3">
          {products.map((product) => (
            <Col lg={4} kew={product._id}>
              <Card className="h-100 rd-custom">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="h-75 img-fluid"
                />
                <Card.Body>
                  <Card.Title>
                    <h3> {product.pname}</h3>
                  </Card.Title>
                  <small>By {product.brand}</small>
                  <br />
                  <small>In Stock</small>
                  <Card.Text className="mt-3 text-muted lead">
                    {product.description}
                  </Card.Text>
                  <Card.Title>${product.price}</Card.Title>
                  <p>
                    <small>{product.order} Ordered</small>
                  </p>
                  <Link to={`/order/${product._id}`}>
                    <Button className="bg-custom">ADD TO CART</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Products;
