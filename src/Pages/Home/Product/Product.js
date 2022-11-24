import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    const {img, brand,_id} = product
    return (
        <div>


        <Link to={`/categories/${_id}` }className='text-decoration-none'>
        <div className="card" style={{width: '18rem'}}>
  <img src={img} className="card-img-top img" alt="..."/>
  <div className="card-body">
    <p className="card-text text-secondary"> {brand} </p>
  </div>
</div></Link>
           
           
        </div>
     

        
    );
};

export default Product;