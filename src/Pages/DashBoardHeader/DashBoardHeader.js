import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useBuyer from "../../Hooks/useBuyer";
import useSeller from "../../Hooks/useSeller";


const DashBoardHeader = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin);
  const [isSeller] = useSeller(user?.email);

  const [isBuyer] = useBuyer(user?.email);
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Offcanvas navbar
        </Link>

        <p>please, click right side toggler for  see the navbar</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
           

              {isAdmin && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/allUsers">
                      all users
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/allSellers">
                      All Sellers
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/allBuyers">
                      All Buyers
                    </Link>
                  </li>
                </>
              )}

              {isSeller && (
               <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/allSellers">
                    All Sellers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/addproduct">
                    Add product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/myproducts">
                    My products
                  </Link>
                </li>
                </>
              )}

              {isBuyer && (
             <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/allBuyers">
                    All Buyers
                  </Link>
                </li>
                   <li className="nav-item">
                <Link className="nav-link" to="#">
                  {" "}
                  My Orders
                </Link>
              </li></>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashBoardHeader;
