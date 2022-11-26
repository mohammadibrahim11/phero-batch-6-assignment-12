import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import {  AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    if(!user){

        return <Navigate to='/login' state={{from: location}} replace></Navigate>
       
    }
    return children;

  
   
};

export default PrivateRoute;