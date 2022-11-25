import React from "react";
import { useLoaderData } from "react-router";
import AllBrand from "../AllBrand/AllBrand";
import BookNowModal from '../BookNowModal/BookNowModal'
import SingleCategory from "../SingleCategory/SingleCategory";
import './Categories.css'


const Categories = () => {
  // const [product,  setProduct] = useState(null);
  const categories = useLoaderData();
  // console.log(categories);
  const { products}= categories;
  // console.log(products);

 

  return (
<div className="container">
<div className="category-container row m-auto">
    <div className="col-2">
        
      <AllBrand></AllBrand>
           
       
    </div>
    <div className="col-10">
        {products.map( product => <SingleCategory product={product} 
        key={product.id}
        ></SingleCategory>)}
    </div>
       
       <div>
        {
          products.map( product => <BookNowModal product={product} key={product.id} ></BookNowModal>)
        }
       </div>
  </div>
</div>
  );
};

export default Categories;
