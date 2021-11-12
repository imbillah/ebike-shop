import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://protected-oasis-88562.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Product added successfully");
          reset();
        }
      })
      .catch((err) => alert(`${err.message}`));
  };
  return (
    <Container>
      <h2>Add product as Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Product Name"
          {...register("pname")}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Image url"
          {...register("image")}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Product Brand"
          {...register("brand")}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Already Order number"
          {...register("order")}
          required
        />
        <br />
        <textarea
          placeholder="Peoduct Details"
          {...register("description")}
          required
        />
        <br />
        <input type="submit" value="Add Product" />
      </form>
    </Container>
  );
};

export default AddProduct;
