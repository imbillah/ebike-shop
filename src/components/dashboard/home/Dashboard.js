import React from "react";
import { Col, Row } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ManageOrder from "../admin/ManageOrder";
import ManageProduct from "../admin/ManageProduct";
import AddProduct from "../admin/AddProduct";
import AddReview from "../user/AddReview";
import MyOrder from "../user/MyOrder";
import Payment from "../user/Payment";
import MakeAdmin from "../admin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";

const textDecoration = {
  color: "black",
  textDecoration: "none",
};
const Dashboard = () => {
  const { admin } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Row>
        <Col lg={3} className="bg-warning">
          <ul className="dashboard-list">
            <Link to="/" style={textDecoration}>
              <li>HOME</li>
            </Link>
            <hr />
            <Link to={`${path}`} style={textDecoration}>
              <li>MY ORDER</li>
            </Link>
            <Link to={`${url}/addReview`} style={textDecoration}>
              <li>ADD REVIEW</li>
            </Link>
            <Link to={`${url}/payment`} style={textDecoration}>
              <li>PAYMENT</li>
            </Link>
            <hr />
            {admin && (
              <div>
                <Link to={`${url}/manageOrders`} style={textDecoration}>
                  <li>MANAGE ORDERS</li>
                </Link>
                <Link to={`${url}/manageProducts`} style={textDecoration}>
                  <li>MANAGE PRODUCTS</li>
                </Link>
                <Link to={`${url}/addProduct`} style={textDecoration}>
                  <li>ADD PRODUCT</li>
                </Link>
                <Link to={`${url}/makeAdmin`} style={textDecoration}>
                  <li>MAKE ADMIN</li>
                </Link>
                <hr />
              </div>
            )}

            <Link to="/" style={textDecoration}>
              <li>LOGOUT</li>
            </Link>
          </ul>
        </Col>
        <Col lg={9}>
          <Switch>
            <Route exact path={path}>
              <MyOrder />
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview />
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <Route path={`${path}/manageOrders`}>
              <ManageOrder />
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProduct />
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct />
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
