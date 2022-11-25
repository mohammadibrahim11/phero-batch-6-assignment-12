import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Brand from '../Brand/Brand';

const AllBrand = ({br}) => {
    const [allBrands, setAllBrands] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/categories`)
        .then( res => res.json())
        .then( data => {
            setAllBrands(data)
            // console.log(data)
        }
            )
    }, [])
    
    return (
        <div >
            <div>
                <h1 className='fs-4'>categories</h1>
            </div>
         <div>
         {
                allBrands.map( brand => <Brand brand={brand} key={brand._id} ></Brand>)
            }
         </div>
        </div>
    );
};

export default AllBrand;