import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const SellerAdvertise = () => {
    const {sellerAdvertise}= useContext(AuthContext);
    console.log(sellerAdvertise);
    
    return (
        <div>
            seller advertise
        </div>
    );
};

export default SellerAdvertise;