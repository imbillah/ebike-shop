import axios from "axios";
import React, { useState } from "react";

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
          alert("Admin added");
          setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make Another Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={emailHandler}
          type="email"
          placeholder="Enter email address"
        />
        <br />
        <input type="submit" value="Make Admin" />
      </form>
    </div>
  );
};

export default MakeAdmin;
