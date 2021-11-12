import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios(
      `https://protected-oasis-88562.herokuapp.com/myorders/${user.email}`
    ).then((res) => setMyOrders(res.data));
  }, [user]);

  const deletHandler = (id) => {
    const proceed = window.confirm("Are you sure, you want to cancel?");
    if (proceed) {
      const url = `https://protected-oasis-88562.herokuapp.com/orders/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount > 0) {
          alert("Booking canceled successfully");
          const restOrders = myOrders.filter((order) => order._id !== id);
          setMyOrders(restOrders);
        }
      });
    }
  };
  return (
    <div>
      <h4 className="fw-bold text-uppercase text-custom my-4">
        Products you have ordered : {myOrders.length}
      </h4>
      <Row>
        {myOrders.map((order) => (
          <Col lg={6} key={order._id}>
            <div>
              <div className="d-flex p-2 shadow rd-custom mt-4">
                <img
                  src={order.image}
                  className=" img-fluid w-25 me-3 rounded-3"
                  alt=""
                />
                <div>
                  <h4 className="mb-3">{order.productname}</h4>
                  <h5>Order Date: {order.date}</h5>
                  <h6>{order.price}</h6>
                  <h6>Status: {order.status}</h6>
                  <button
                    onClick={() => deletHandler(order._id)}
                    className="btn btn-outline-danger mt-3"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyOrder;
