import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = { email };
    axios
      .put("https://protected-oasis-88562.herokuapp.com/users/admin", user)
      .then((res) => {
        if (res.data.modifiedCount) {
          swal("Done", "New admin added", "success");
          setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <h2 className="fw-bold text-uppercase text-custom mt-5">Make an Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={emailHandler}
          type="email"
          placeholder="Enter user email address"
          required
          className="p-2 my-3 w-50"
        />
        <br />
        <input
          type="submit"
          value="MAKE ADMIN"
          className="btn bg-custom my-3 py-2 text-white mt-2"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
