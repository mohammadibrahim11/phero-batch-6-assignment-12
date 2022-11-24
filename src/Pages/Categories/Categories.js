import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleCategory from '../SingleCategory/SingleCategory';

const Categories = () => {
    const category = useLoaderData();
    console.log(category);
    const {products} = category;

    // const {products} = category;
    // const [categories , setCategories] = useState([]);
    // useEffect( () => {
    //     fetch(`categories.json`)
    //     .then( res => res.json())
    //     .then( data => {
    //         setCategories(data)
    //         console.log(data)})
    // }, [])


    return (
        <div>
            {
             products.map( product => <SingleCategory product={product}>

                </SingleCategory>)
            }
        </div>
    );
};

export default Categories;