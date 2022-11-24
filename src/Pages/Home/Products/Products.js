import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch(`categories.json`)
        .then( res => res.json())
        .then( data => {
            setProducts(data)
            console.log(data)})
    }, [])
    return (
        <div className='container'>
            <h1 className='fs-3 mt-5 mb-3 text-primary'>product category</h1>
        <div className=' products'>
           
        {
                products.map( product => 
                <Product key={product._id} product={product} ></Product>)
            }
        </div>
        </div>
    );
};

export default Products;