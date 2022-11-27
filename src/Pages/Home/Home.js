import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import SellerAdvertise from './SellerAdvertise/SellerAdvertise';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Products/>
           <SellerAdvertise></SellerAdvertise>
        </div>
    );
};

export default Home;