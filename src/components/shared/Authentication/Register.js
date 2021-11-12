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
      <Container className=" text-center fw-bold">
        <h3>Register Your Accout here</h3>
        {/* <img src="" alt="" /> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            required
          />
          <br />
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
          <input type="submit" value="Register" />
        </form>
        <Link to="/login">Already registered? Login Here</Link>
      </Container>
    </>
  );
};

export default Register;
