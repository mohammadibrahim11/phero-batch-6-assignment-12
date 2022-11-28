import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Adv from '../Adv/Adv';

const SellerAdvertise = () => {
    const [advertise, setAdvertise]= useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/advertiseproduct`)
        .then( res => res.json())
        .then( data => {
            setAdvertise(data);
            console.log(data);
        })
    },[])
 
    
    return (
        <div>
           {advertise.map( ad => <Adv ad={ad}></Adv>)}
        </div>
    );
};

export default SellerAdvertise;