import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

import { Authcontext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, updateUser,signInWithGoogle } = useContext(Authcontext);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully");
        handleUserProfile(name)
    
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.log(error);
      });
  };

  const handleUserProfile = (name)=> {
    const profile = {
      name
    }
    updateUser(profile)
    .then(() => {})
    .catch((error) => console.log(error));
  }

  const handleGoogleSignIn =()=> {
    signInWithGoogle()
    .then((result) => {
      const user = result.user;
      // navigate('/courses')
      console.log(user);
      // setError('')
    })
  .catch((error) => {
    setRegisterError(error.message)
    console.error(error)});
    
  }
  return (
    <div className="w-50 m-auto mt-5 mb-5 ">
      <div>
        <p className="fs-4">Register Now</p>
      </div>
      <form
        onSubmit={handleRegister}
        className="w-50 p-4 border rounded m-auto text-start"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-6">
            your name
          </label>
          <input
            type="text"
            name="name"
            className="form-control p-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-6">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control p-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
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
          {registerError && (
            <p className="text-danger fs-6"> {registerError}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
        <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full  ps-2 me-2 "
            >
              sign in with google
            </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
