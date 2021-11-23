import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import swal from "sweetalert";

const ManageOrder = () => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    fetch("https://protected-oasis-88562.herokuapp.com/orders").then((res) =>
      res.json().then((data) => setUserOrders(data))
    );
  }, [userOrders]);

  // updating product status
  const status = {
    status: "Shipped",
  };
  const approveOrder = (id) => {
    axios
      .put(`https://protected-oasis-88562.herokuapp.com/orders/${id}`, status)
      .then((res) => {
        if (res.data.modifiedCount) {
          swal("Done!", "Order status updated", "success");
        }
      });
  };
  // deleting order
  const deleteHandler = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(`https://protected-oasis-88562.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            swal("Done!", "Order deleted successfully", "success");
          }
        });
    }
  };
  return (
    <div className="mx-lg-5">
      <h2 className="text-center fw-bold text-uppercase text-custom my-4">
        Manage all user's orders
      </h2>
      <h5 className="text-center fw-bold text-custom my-3">
        Total Orders: {userOrders.length}
      </h5>
      {userOrders.length === 0 ? (
        <div className="container text-center">
          <Spinner animation="grow" variant="secondary" />
        </div>
      ) : (
        <Table variant="dark">
          <thead>
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Product Name</th>
              <th scope="col">Status</th>
              <th colSpan="2" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          {userOrders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <th scope="row">{order.name}</th>
                <td>{order.email}</td>
                <td>{order.productname}</td>
                <td>{order.status}</td>
                <td colSpan="2" className="text-center">
                  <button
                    onClick={() => approveOrder(order._id)}
                    className="btn btn-success"
                  >
                    UPDATE STATUS
                  </button>
                  <button
                    onClick={() => deleteHandler(order._id)}
                    className="btn btn-danger ms-lg-3 px-3"
                  >
                    DELETE
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

export default ManageOrder;
