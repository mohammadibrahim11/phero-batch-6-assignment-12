import React, { useContext, useState } from "react";
import {  useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
// import useToken from "../../Hooks/useHooks";

const Login = () => {
  const [logInError, setLogInError] = useState();
  const { LogIn,signInWithGoogle } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('')
  // const [token] = useToken(loginUserEmail);
  // const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state.from.pathname || '/';
// if (token) {
//   navigate( from, {replace: true})
// }
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    LogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(email)
        form.reset();
        setLogInError('')
   
      })
      .catch((error) => {
        console.log(error);
        setLogInError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate('/')
        console.log(user);
      })
      .catch((error) => {
        setLogInError(error.message);
        console.error(error);
      });
  };
  return (
    <div>
      <div className="w-50 m-auto mt-5 mb-5 ">
        <div>
          <p className="fs-4">Log in here!!</p>
        </div>
        <form
          onSubmit={handleLogIn}
          className="w-50 p-4 border rounded m-auto text-start"
        >
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
          <div>{logInError && <p className="text-danger fs-6">{logInError}</p>}</div>

        <div>
          <p>dont have an accoutn? <Link to='/register' >Register</Link></p>
        </div>
          <div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-primary w-full w-100 mb-3 ps-2 me-2 "
          >
            sign in with google
          </button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
