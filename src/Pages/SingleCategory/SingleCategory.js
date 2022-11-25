import React from "react";
import "./SingleCategory.css";

const SingleCategory = ({ product }) => {
  // console.log(product);
  const {
    product_name,
    sellers_name,
    post_time,
    location,
    years_of_use,
    picture,
    resale_Price,
    orginal_price,
  } = product;

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "740px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={picture}
              className="img-fluid rounded-start p-3"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title">{product_name}</h5>
              <div className="d-flex ">
                <div className="fs-6 ">
                  <p>resale_Price: ${resale_Price}</p>
                  <p>orginal_price: ${orginal_price} </p>
                  <p>post_time: {post_time}</p>
                </div>
                <div>
                  <p>years_of_use: {years_of_use}</p>
                  <p>sellers_name: {sellers_name}</p>
                  <p>location: {location}</p>
                </div>
              </div>
              {/* <!-- Button trigger modal --> */}

              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
