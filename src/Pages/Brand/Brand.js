import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({brand}) => {
    console.log(brand);
    return (
        <div>
          <Link className='text-decoration-none text-dark hover:text-primary' to ={`/categories/${brand._id}`}>  {brand.brand}</Link>
        </div>
    );
};

export default Brand;