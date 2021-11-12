import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post("https://protected-oasis-88562.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Review added successfully");
          reset();
        }
      });
  };
  return (
    <Container>
      <h3 className="fw-bold  text-uppercase text-custom my-4">
        Add your Review
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {user.displayName && (
          <input
            readOnly={true}
            defaultValue={user.displayName}
            {...register("name")}
            className="p-2 mt-3 w-75"
          />
        )}
        <br />
        {user.email && (
          <input
            readOnly={true}
            defaultValue={user.email}
            {...register("email")}
            className="p-2 mt-3 w-75"
          />
        )}
        <textarea
          {...register("comment")}
          className="p-2 mt-3 w-75"
          placeholder="Your comment"
          required
        />
        <input
          type="text"
          {...register("country")}
          className="p-2 my-3 w-75"
          placeholder="Your Country"
          required
        />
        <p>Ratings:</p>
        <select
          {...register("ratings")}
          className="p-2 w-75"
          placeholder="Rating"
        >
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <input
          type="submit"
          value="ADD REVIEW"
          className="btn bg-custom my-3 py-2 text-white mt-4"
        />
      </form>
    </Container>
  );
};

export default AddReview;
