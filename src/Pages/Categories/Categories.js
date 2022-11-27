import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AllBrand from "../AllBrand/AllBrand";
import BookNowModal from "../BookNowModal/BookNowModal";
import SingleCategory from "../SingleCategory/SingleCategory";
import "./Categories.css";

const Categories = () => {
  const [bookProduct, setBookProduct] = useState([]);
  // const [role, setRole]= useState([]);
  console.log(bookProduct);
  const categories = useLoaderData();
  const { products } = categories;

  // useEffect( ()=>{
  //   fetch('http://localhost:5000/allBuyers')
  //   .then(res => res.json())
  //   .then(data => {
  //     setRole(data)
  //     console.log(data)
  //   })
  // } ,[])

  return (
    <div className="container">
      <div className="category-container row m-auto">
        <div className="col-2">
          <AllBrand></AllBrand>
        </div>
      
        <div className="col-10">
         
          {products.map((product) => (
            <SingleCategory
              product={product}
              
              key={product.id}
              setBookProduct={setBookProduct}
            ></SingleCategory>
          ))}
        </div>
        <div>
      { bookProduct &&  <BookNowModal
       
            bookProduct={bookProduct}
            setBookProduct={setBookProduct}
          ></BookNowModal>}
        </div>
      </div>
    </div>
  );
};

export default Categories;
