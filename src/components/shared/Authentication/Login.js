import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUser, setUser } = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        setUser(res.user);
        alert("Sign in Successful!");
        history.push("/");
      })
      .catch((err) => alert(`${err.message}`));
  };

  return (
    <Container className=" text-center">
      <h3 className=" text-center fw-bold">Login to your account</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Your Password [minimum 6 characters long]"
          {...register("password")}
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </Container>
  );
};

export default Login;
