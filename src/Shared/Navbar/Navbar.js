import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = (email) => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user)
  const [isAdmin] = useAdmin(email);

  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            reCommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>

              {user ? (
                <>
                  {
                    <li className="nav-item">
                      <Link to="/dashboard" className=" nav-link">
                        Dashboard
                      </Link>
                    </li>
                  }

                  <li>
                    <button onClick={handleLogOut} className="btn btn-primary ">
                      sign out
                    </button>
                  </li>
                </>
              ) : (
                <div className="d-flex flex-row justify-content-center ">
                  <li>
                    {" "}
                    <Link className="btn btn-primary me-3" to="/login">
                      Login
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="btn btn-primary" to="/register">
                      Register
                    </Link>{" "}
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
