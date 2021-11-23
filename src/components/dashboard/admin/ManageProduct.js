import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import swal from "sweetalert";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://protected-oasis-88562.herokuapp.com/products").then((res) =>
      setProducts(res.data)
    );
  }, [products]);

  const deleteHandler = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      console.log(id);
      axios
        .delete(`https://protected-oasis-88562.herokuapp.com/products/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            swal("Done", "Product deleted successfully", "success");
          }
        });
    }
  };
  return (
    <div className="mx-lg-5">
      <h2 className="text-center fw-bold text-uppercase text-custom my-3">
        Manage all products
      </h2>

      <h5 className="text-center fw-bold text-custom my-3">
        Total Products: {products.length}
      </h5>
      {products.length === 0 ? (
        <div className="container text-center">
          <Spinner animation="grow" variant="secondary" />
        </div>
      ) : (
        <Table variant="dark">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">Product Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Total Order</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {products.map((product, index) => (
            <tbody key={product._id}>
              <tr>
                <th scope="row">{index}</th>
                <td>
                  <img
                    src={product.image}
                    style={{ height: "45px", width: "45px" }}
                    className="me-3 rd-custom"
                    alt=""
                  />
                  {product.pname}
                </td>
                <td>{product.brand}</td>
                <td>$ {product.price}</td>
                <td>{product.order}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
    </div>
  );
};

export default ManageProduct;
