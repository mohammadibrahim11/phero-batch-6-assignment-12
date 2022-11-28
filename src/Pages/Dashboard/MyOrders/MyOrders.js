import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
// import { AuthContext } from "../../Context/AuthProvider";
import Order from '../Order/Order';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    const [orders, setMyOrders] =useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings/buyerEmail?buyerEmail=${user?.email}`)
        .then( res => res.json())
        .then( data  => {
            setMyOrders(data)
            console.log(data);
        })
    },[user?.email])
   
    return (
        <div>
            <div className='mt-5 pt-5'>
                <p className='' >my order</p>
            </div>
          <div>
          {
                orders.map( order => <Order order={order}></Order>)
            }
           
          </div>
        </div>
    );
};

export default MyOrders;