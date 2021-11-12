import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  const { id } = useParams();

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
          alert("Your Order Confirmed");
          reset();
        }
      });
  };

  return (
    <Container>
      <h2>Confirm your order</h2>
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
          value="Confirm Order"
          className="btn btn-warning my-3 py-2 fw-bold rounded-pill"
        />
      </form>
    </Container>
  );
};

export default Order;
