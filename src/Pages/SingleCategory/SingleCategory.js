import React from 'react';
import { Link } from 'react-router-dom';
// import { useLoaderDatLink } from 'react-router';

const SingleCategory = ({product}) => {
    console.log(product);
    const {product_name} = product
 
    return (
        <div>
       <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product_name} </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="#" className="btn btn-primary">Go somewhere</Link >
  </div>
</div>
        </div>
    );
};

export default SingleCategory;