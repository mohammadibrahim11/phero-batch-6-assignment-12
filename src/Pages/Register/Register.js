import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useHooks";

const Register = () => {
  const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const [ createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  console.log(token);
 
 if(token){
  navigate('/')
 }

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const accountRole = form.role.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully");
        handleUserProfile(name,email,accountRole);
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.log(error);
      });
  };

  const handleUserProfile = (name,email,accountRole) => {
    const profile = {
       displayName: name
    };
    updateUser(profile)
      .then(() => {
        
      })
      .catch((error) => console.log(error));

      saveUser(name,email, accountRole);
  };

  const saveUser = (name, email, role) => {
    const users = { name, email, role };
    console.log(users)              
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        // getUserToken(email);
       setCreatedUserEmail(email.email)
      });
  };

  // const getUserToken = (email) => {
  //   fetch(`http://localhost:5000/jwt?email=${email}`)
  //   .then( res => res.json())
  //   .then( data => {
  //     if(data.accesstoken){
  //  localStorage.setItem('accessToken', data.accesstoken);
  //       navigate('/')
  //     }
  //     console.log(data);
  //   })
  // }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success('register successful')
        navigate('/')
        console.log(user);
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.error(error);
      });
  };
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fs-6">
            account role
          </label>

          <select name="role" id="role">
            <option defaultValue>buyer</option>
            <option>seller</option>
          </select>
          {/* <input
            type="option"
            name="account-role"
            className="form-control p-1"
            id="exampleInputPassword1"
          /> */}
        </div>
        <div>
          {registerError && (
            <p className="text-danger fs-6"> {registerError}</p>
          )}
        </div>

        <div className="fs-6 text-center">
          <p>already register? <Link to='/login'>Login</Link></p>
        </div>

      <div className="">
      <button type="submit" className="btn btn-primary mb-3 w-100">
         Register
        </button>
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-primary w-full w-100  ps-2 me-2 "
          >
            sign in with google
          </button>
      </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
