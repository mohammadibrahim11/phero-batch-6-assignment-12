import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AllBrand from "../AllBrand/AllBrand";
import Products from "../Home/Products/Products";
// import { Link } from "react-router-dom";
// import Brand from "../Brand/Brand";
import SingleCategory from "../SingleCategory/SingleCategory";


const Categories = () => {
    // const [brands,setBrands] = useState([]);
  const categories = useLoaderData();
  console.log(categories);
  const { products}= categories;

 

  return (
<div className="container">
<div className="row">
    <div className="col">
        
      <AllBrand></AllBrand>
           
       
    </div>
    <div className="category-container">
        {products.map( product => <SingleCategory product={product}></SingleCategory>)}
    </div>
  </div>
</div>
  );
};

export default Categories;
