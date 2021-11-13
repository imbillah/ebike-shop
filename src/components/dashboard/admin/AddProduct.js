import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://protected-oasis-88562.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal("Done!", "New product added", "success");
          reset();
        }
      })
      .catch((err) => alert(`${err.message}`));
  };
  return (
    <Container>
      <h2 className="fw-bold  text-uppercase text-custom my-4">Add product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Product Name"
          {...register("pname")}
          required
          className="p-2 mt-3 w-75"
        />
        <br />
        <input
          type="text"
          placeholder="Image url"
          {...register("image")}
          required
          className="p-2 mt-3 w-75"
        />
        <br />
        <input
          type="text"
          placeholder="Product Brand"
          {...register("brand")}
          required
          className="p-2 mt-3 w-75"
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          required
          className="p-2 mt-3 w-75"
        />
        <br />
        <input
          type="number"
          placeholder="Already ordered number"
          {...register("order")}
          required
          className="p-2 mt-3 w-75"
        />
        <br />
        <textarea
          placeholder="Product description"
          {...register("description")}
          required
          className="p-2 mt-3 w-75"
        />
        <br />
        <input
          type="submit"
          value="ADD PRODUCT"
          className="btn bg-custom my-3 py-2 text-white mt-4"
        />
      </form>
    </Container>
  );
};

export default AddProduct;
