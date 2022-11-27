import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookNowModal = ({ bookProduct, setBookProduct,role }) => {
  console.log(role);

  const { user } = useContext(AuthContext);
 
  const { product_name, original_price, resale_Price } = bookProduct;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const userLocation = form.location.value;
    const itemName = form.itemname.value;
    const itemPrice = form.itemprice.value;
    console.log(name, email, phone, userLocation, itemName, itemPrice);

    const booking = {
      name,
      email,
      phone,
      userLocation,
      itemPrice,
      itemName,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledge) {
          toast("user created successfully");
          setBookProduct("");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {product_name}
              </h1>
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {original_price}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleBooking} className="">
                <div className="mb-3 ">
                  <input
                    type="text"
                    className="form-control mb-2 w-75 m-auto"
                    id="name"
                    defaultValue={user && user.displayName}
                    readOnly
                    placeholder="username"
                  />

                  <input
                    type="email"
                    className="form-control mb-2 w-75 m-auto"
                    id="email"
                    defaultValue={user && user.email}
                    readOnly
                    placeholder="useremail"
                  />

                  <input
                    type="text"
                    className="form-control mb-2 w-75 m-auto"
                    id="itemname"
                    defaultValue={product_name}
                    readOnly
                    placeholder="itemname"
                  />

                  <input
                    type="text"
                    className="form-control mb-2 w-75 m-auto"
                    id="itemprice"
                    defaultValue={resale_Price}
                    readOnly
                    placeholder="itemprice"
                  />
                  <input
                    type="text"
                    className="form-control mb-2 w-75 m-auto"
                    id="phone"
                    placeholder="phone"
                  />
                  <input
                    type="text"
                    className="form-control mb-2 w-75 m-auto"
                    id="location"
                    placeholder="location"
                  />
                </div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
