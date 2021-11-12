import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Order from "../../private/Order";

const ManageOrder = () => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    axios("https://protected-oasis-88562.herokuapp.com/orders").then((res) =>
      setUserOrders(res.data)
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
          alert("Status approved successfully");
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
            alert("Order Deleted");
          }
        });
    }
  };
  return (
    <div>
      <h2>Manage all users orders</h2>
      <Table>
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">User Name</th>
            <th scope="col">Service Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {userOrders.map((order, index) => (
          <tbody key={order._id}>
            <tr>
              <th scope="row">{index}</th>
              <td>{order.name}</td>
              <td>{order.productname}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => approveOrder(order._id)}
                  className="btn btn-success"
                >
                  Update Status
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteHandler(order._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrder;
