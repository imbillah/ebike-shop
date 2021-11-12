import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { updateProfile } from "@firebase/auth";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const imgUrl = "https://i.postimg.cc/cLH479pD/profile.png";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setUser, saveUser, registerUser, auth } = useAuth();
  const history = useHistory();

  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, imgUrl)
      .then((res) => {
        setUser(res.user);
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: imgUrl,
        }).then(() => {
          saveUser(data.email, data.name);
          alert("Account created success");
          history.push("/");
        });
      })
      .catch((err) => alert(`${err.message}`));
  };
  return (
    <>
      <Container className=" text-center login-div">
        <h3 className="fw-bold top-margin text-uppercase text-dark mt-5 p-3">
          Register Your Accout
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            required
            className="p-2 mt-3 w-75 rounded-3"
          />
          <br />
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
            placeholder="Your Password [6 characters required]"
            {...register("password")}
            required
            className="p-2 mt-3 w-75 rounded-3"
          />
          <br />
          <input
            type="submit"
            value="REGISTER"
            className="btn bg-white my-3 py-2 text-dark fw-bold my-4 px-5"
          />
        </form>
        <Link to="/login" className=" text-decoration-none fw-bold text-white">
          Already registered? Login Here
        </Link>
      </Container>
    </>
  );
};

export default Register;
