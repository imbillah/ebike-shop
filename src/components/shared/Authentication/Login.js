import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { loginUser, setUser, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const redirectUrl = location.state?.from || "/";

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        setUser(res.user);
        swal("Logged in!", "Welcome Back!", "success");
        history.push(redirectUrl);
      })
      .catch((err) => swal("Something Wrong", `${err.message}`, "error"));
  };

  return (
    <Container className=" text-center login-div">
      <h3 className="fw-bold top-margin text-uppercase text-dark mt-5 p-3">
        Login to your account
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          required
          className="p-2 mt-3 w-75 rounded-3"
        />
        <br />
        <input
          type="password"
          placeholder="Your Password"
          {...register("password")}
          required
          className="p-2 mt-3 w-75 rounded-3"
        />
        <br />
        <input
          type="submit"
          value="LOG IN"
          className="btn bg-white my-3 py-2 text-dark fw-bold my-4 px-5"
        />
      </form>
      <Link to="/register" className=" text-decoration-none fw-bold text-white">
        Need an account? Register here
      </Link>
      <div className="mt-5">
        <Link to="/">
          <i className="bi bi-house-fill fs-2 text-white"></i>
        </Link>
      </div>
    </Container>
  );
};

export default Login;
