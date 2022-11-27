import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddProduct = () => {
    const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.name.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const condition = form.condition.value;
    const location = form.location.value;
    const purchase = form.purchaseYear.value;
    const phone = form.phone.value;
    const category = form.category.value;
    const  description = form.description.value;

    console.log(productName, price,photoURL,condition,location,purchase,phone,category,description);

    const product={
        productName,
        price,
        photoURL,
        condition,
        location,
        purchase,
        phone,
        category,
        description

    }

    fetch('http://localhost:5000/addproduct', {
        method: "POST",
        headers:{
            'content-type': 'application/json',
        },
        body:JSON.stringify(product)
    })
    .then(res => res.json())
    .then( data => {
        toast('product added successfully');
        navigate('/dashboard/myproducts')

        console.log(data)
    })
    .catch(error => console.log(error))

  };
  return (
    <div className=" container w-80 m-auto mt-5 pt-5">
     <div>
     <p className="fs-6 mt-5 pt-5"> Add product</p>
     </div>
      <form onSubmit={handleAddProduct} className="w-50 m-auto text-start  ">
        <div className="d-flex justify-content-around p-3     border rounded">
          <div>
            <div className="">
             
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder=" product name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
             
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="price"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
             
              <input
                type="text"
                name="condition"
                className="form-control"
                placeholder="condition"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
             
              <input
                type="number"
                name="phone"
                className="form-control"
                placeholder=" phone"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="">
            <div className="">
             
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder=" location"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
             
              <input
                type="text"
                name="category"
                className="form-control"
                placeholder=" category"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
             
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="description"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
            
              <input
                type="text"
                name="purchaseYear"
                className="form-control"
                placeholder="purchase year"
                aria-describedby="emailHelp"
              />
            </div>
            <div>
              <input type="photoURL" name="photoURL" className="form-control"placeholder="photo"
              aria-describedby="emailHelp" />
            </div>
          
          </div>

        
        </div>

        <input
          type="submit"
          className="btn btn-primary w-100 m-auto mt-3 mb-5"
        
         value='add your product'
        />
      </form>
    </div>
  );
};

export default AddProduct;
