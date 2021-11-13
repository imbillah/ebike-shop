import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import AppBar from "../shared/HomePage/AppBar";

const Order = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    axios(`https://protected-oasis-88562.herokuapp.com/products/${id}`).then(
      (res) => setOrder(res.data)
    );
  }, []);

  const onSubmit = (data) => {
    data.status = "Pending";
    data.image = `${order.image}`;
    axios
      .post("https://protected-oasis-88562.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal("Good job!", "Your order is being added", "success");
          history.push("/dashboard");
          reset();
        }
      });
  };

  return (
    <>
      <AppBar />
      <Container>
        <h2 className="fw-bold text-center  text-uppercase text-custom my-5">
          Confirm your order
        </h2>
        <Row>
          <Col lg={6}>
            <div
              className="d-flex rd-custom shadow mt-2 p-2"
              style={{ border: "1px solid #777af2" }}
            >
              <img src={order.image} className="w-25 h-25 rounded-3" alt="" />
              <div className="ms-3">
                <h4>{order.pname}</h4>
                <p>
                  <small>By {order.brand}</small>
                </p>
                <h5>${order.price}</h5>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {order.pname && (
                <input
                  readOnly={true}
                  defaultValue={order.pname}
                  {...register("productname")}
                  className="p-2 my-2 w-75"
                />
              )}
              <br />
              {user.displayName && (
                <input
                  readOnly={true}
                  defaultValue={user.displayName}
                  {...register("name")}
                  className="p-2 my-2 w-75"
                />
              )}
              <br />
              {user.email && (
                <input
                  readOnly={true}
                  defaultValue={user.email}
                  {...register("email")}
                  className="p-2 my-2 w-75"
                />
              )}
              <br />
              <input
                readOnly={true}
                defaultValue={new Date().toLocaleDateString()}
                {...register("date")}
                className="p-2 my-2 w-75"
              />
              <br />
              <textarea
                {...register("address")}
                className="p-2 my-2 w-75"
                placeholder="Your address"
                required
              />
              <br />
              <input
                type="text"
                {...register("country")}
                className="p-2 my-2 w-75"
                placeholder="Country"
                required
              />
              <br />
              <input
                type="text"
                {...register("number")}
                className="p-2 my-2 w-75"
                placeholder="Phone number"
                required
              />
              <br />
              {order.price && (
                <input
                  readOnly={true}
                  {...register("price")}
                  defaultValue={`$${order.price}`}
                  className="p-2 my-2 w-75"
                />
              )}
              <br />
              <p>Quantity:</p>
              <select
                {...register("quantity")}
                className="p-2  w-75"
                placeholder="Rating"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <br />
              <input
                type="submit"
                value="CONFIRM ORDER"
                className="btn bg-custom my-3 py-2 text-white mt-4"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Order;
