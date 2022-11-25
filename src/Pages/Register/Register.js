import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/AuthProvider";

const Signin = () => {
  const { createUser } = useContext(Authcontext);
  const [error, setErrot] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setErrot(error.message);
        console.log(error);
      });
  };
  return (
    <div className="w-50 m-auto mt-5 mb-5 ">
      <div>
        <p className="fs-4">Register Now</p>
      </div>
      <form onSubmit={handleSignin} className="w-50 p-4 border rounded m-auto text-start">
        <div className="mb-3">
          <label htmlhtmlFor="exampleInputEmail1" className="form-label fs-6">
            your name
          </label>
          <input
            type="text"
            name="name"
            className="form-control p-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlhtmlFor="exampleInputEmail1" className="form-label fs-6">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control p-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fs-6">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control p-1"
            id="exampleInputPassword1"
          />
        </div>
  <div>
   <p className="text-danger fs-6"> {error}</p>
  </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Signin;
